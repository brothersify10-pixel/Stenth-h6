-- Complete Supabase setup for STENTH booking system
-- This handles Canada, Australia, and any other countries in ONE table
-- Run this entire script in your Supabase SQL Editor

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Drop existing tables if they exist (only if you want to start fresh)
-- DROP TABLE IF EXISTS public.booking_events;
-- DROP TABLE IF EXISTS public.bookings;

-- Main bookings table - handles ALL countries (Canada, Australia, etc.)
CREATE TABLE IF NOT EXISTS public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text NOT NULL,
  company text,
  notes text,
  phone text,
  country text, -- "Canada", "Australia", etc.
  region text,  -- "Ontario", "New South Wales", etc.
  city text,    -- "Toronto", "Sydney", etc.
  source text,  -- "canada_booking_page", "australia_booking_page", etc.
  status text NOT NULL DEFAULT 'form_submitted',
  cal_uid text,
  start_time timestamptz,
  end_time timestamptz,
  timezone text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- If table exists but missing columns, add them
DO $$
BEGIN
    -- Add phone column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='phone') THEN
        ALTER TABLE public.bookings ADD COLUMN phone text;
    END IF;

    -- Add country column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='country') THEN
        ALTER TABLE public.bookings ADD COLUMN country text;
    END IF;

    -- Add region column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='region') THEN
        ALTER TABLE public.bookings ADD COLUMN region text;
    END IF;

    -- Add source column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='source') THEN
        ALTER TABLE public.bookings ADD COLUMN source text;
    END IF;

    -- Add city column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='city') THEN
        ALTER TABLE public.bookings ADD COLUMN city text;
    END IF;
END $$;

-- Event log table to track all booking-related events
CREATE TABLE IF NOT EXISTS public.booking_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  email text,
  payload jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_email ON public.bookings (email);
CREATE INDEX IF NOT EXISTS idx_bookings_cal_uid ON public.bookings (cal_uid);
CREATE INDEX IF NOT EXISTS idx_bookings_country ON public.bookings (country);
CREATE INDEX IF NOT EXISTS idx_bookings_region ON public.bookings (region);
CREATE INDEX IF NOT EXISTS idx_bookings_source ON public.bookings (source);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings (created_at);
CREATE INDEX IF NOT EXISTS idx_booking_events_email ON public.booking_events (email);
CREATE INDEX IF NOT EXISTS idx_booking_events_type ON public.booking_events (event_type);

-- Enable Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_events ENABLE ROW LEVEL SECURITY;

-- Public access policies (since this is for lead capture, no user auth required)
CREATE POLICY IF NOT EXISTS "Allow public read access to bookings"
ON public.bookings FOR SELECT USING (true);

CREATE POLICY IF NOT EXISTS "Allow public insert to bookings"
ON public.bookings FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow public update to bookings"
ON public.bookings FOR UPDATE USING (true);

CREATE POLICY IF NOT EXISTS "Allow public insert to booking_events"
ON public.booking_events FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow public read to booking_events"
ON public.booking_events FOR SELECT USING (true);

-- Insert some sample data to verify (optional - you can remove this)
INSERT INTO public.bookings (name, email, company, phone, country, region, city, source, notes) VALUES
('John Doe', 'john@example.ca', 'Maple Corp', '+1-416-555-0123', 'Canada', 'Ontario', 'Toronto', 'canada_booking_page', 'Interested in SEO services for Toronto market'),
('Sarah Smith', 'sarah@example.com.au', 'Aussie Digital', '+61-2-9555-0123', 'Australia', 'New South Wales', 'Sydney', 'australia_booking_page', 'Looking for PPC campaigns in Sydney')
ON CONFLICT (email) DO NOTHING;

-- Verify the table structure
SELECT
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'bookings'
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- Show sample data
SELECT
    name,
    email,
    country,
    region,
    city,
    source,
    created_at
FROM public.bookings
ORDER BY created_at DESC
LIMIT 5;