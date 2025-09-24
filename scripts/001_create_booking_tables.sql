-- Create booking system tables for STENTH
create extension if not exists pgcrypto;

-- Main bookings table to store form submissions and booking details
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  company text,
  notes text,
  phone text,
  country text,
  region text, -- province/state for CA/AU
  source text, -- booking page source (canada_booking_page, australia_booking_page, etc.)
  status text not null default 'form_submitted',
  cal_uid text,
  start_time timestamptz,
  end_time timestamptz,
  timezone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for faster lookups
create index if not exists idx_bookings_email on public.bookings (email);
create index if not exists idx_bookings_cal_uid on public.bookings (cal_uid);

-- Event log table to track all booking-related events
create table if not exists public.booking_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  email text,
  payload jsonb,
  created_at timestamptz not null default now()
);

-- Enable RLS for security (though these tables don't require user authentication)
alter table public.bookings enable row level security;
alter table public.booking_events enable row level security;

-- Allow public access since this is for lead capture (no user auth required)
create policy "Allow public read access to bookings" on public.bookings for select using (true);
create policy "Allow public insert to bookings" on public.bookings for insert with check (true);
create policy "Allow public update to bookings" on public.bookings for update using (true);

create policy "Allow public insert to booking_events" on public.booking_events for insert with check (true);
