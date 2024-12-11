-- Enable RLS
ALTER DATABASE postgres SET "auth.enabled" = true;

-- Create tables
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  customization_options JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  items JSONB NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  pickup_time TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  phone TEXT NOT NULL,
  hours JSONB NOT NULL,
  coordinates JSONB NOT NULL
);

CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  favorite_location_id UUID REFERENCES locations(id),
  dietary_preferences TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Set up Row Level Security (RLS)
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Menu items are viewable by everyone" ON menu_items
  FOR SELECT USING (true);

CREATE POLICY "Orders are viewable by the user who created them" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Orders can be created by authenticated users" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Locations are viewable by everyone" ON locations
  FOR SELECT USING (true);

CREATE POLICY "User profiles are viewable by the user who owns them" ON user_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "User profiles can be created by authenticated users" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "User profiles can be updated by the user who owns them" ON user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Insert default location
INSERT INTO locations (name, address, city, state, zip, phone, hours, coordinates)
VALUES (
  'Carnitas Swords',
  'Main Street',
  'Swords',
  'Dublin',
  'K67 X4K2',
  '+353 1 234 5678',
  '{
    "monday": "11:00 - 22:00",
    "tuesday": "11:00 - 22:00",
    "wednesday": "11:00 - 22:00",
    "thursday": "11:00 - 22:00",
    "friday": "11:00 - 23:00",
    "saturday": "11:00 - 23:00",
    "sunday": "12:00 - 22:00"
  }',
  '{"latitude": 53.4597, "longitude": -6.2181}'
);
