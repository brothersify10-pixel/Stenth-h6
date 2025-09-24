-- Add new columns to existing bookings table
-- Run this in your Supabase SQL Editor

-- Add new columns if they don't exist
DO $$
BEGIN
    -- Add phone column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='phone') THEN
        ALTER TABLE public.bookings ADD COLUMN phone text;
    END IF;

    -- Add country column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='country') THEN
        ALTER TABLE public.bookings ADD COLUMN country text;
    END IF;

    -- Add region column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='region') THEN
        ALTER TABLE public.bookings ADD COLUMN region text;
    END IF;

    -- Add source column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name='bookings' AND column_name='source') THEN
        ALTER TABLE public.bookings ADD COLUMN source text;
    END IF;
END $$;

-- Add indexes for new columns for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_country ON public.bookings (country);
CREATE INDEX IF NOT EXISTS idx_bookings_region ON public.bookings (region);
CREATE INDEX IF NOT EXISTS idx_bookings_source ON public.bookings (source);

-- Verify the table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'bookings'
  AND table_schema = 'public'
ORDER BY ordinal_position;