---
id: field-definitions
title: Field Definitions and Validation
sidebar_label: Field Definitions
---

# Field Definitions and Validation

Complete reference for all system fields and their validation rules.

## Device Fields

### Device Tag
- **Purpose:** Friendly identifier for devices
- **Required:** Yes
- **Format:** 3-50 characters
- **Allowed:** Letters, numbers, hyphens, underscores
- **Examples:**
  - ✓ `Conference-Room-Sensor`
  - ✓ `SENSOR_001`
  - ✗ `S-1` (too short)
  - ✗ `Sensor@Room` (invalid character @)

### MAC Address
- **Purpose:** Hardware identifier
- **Required:** Yes
- **Format:** `00:17:BF:XX:XX:XX`
- **Rules:**
  - Must start with `00:17:BF`
  - Remaining 6 characters: hexadecimal (0-9, A-F)
  - Use uppercase for letters
  - Colons required between pairs
- **Examples:**
  - ✓ `00:17:BF:A1:B2:C3`
  - ✗ `00:11:22:33:44:55` (wrong prefix)
  - ✗ `0017BFA1B2C3` (missing colons)

### Serial Settings
- **Purpose:** Serial communication configuration
- **Required:** Yes
- **Format:** `[baud], [data][parity][stop]`
- **Valid Baud Rates:** 1200, 2400, 4800, 9600, 19200, 38400, 56000, 115200
- **Data Bits:** 7 or 8
- **Parity:** E (Even), N (None), O (Odd)
- **Stop Bits:** 1 or 2
- **Examples:**
  - ✓ `9600, 8N1`
  - ✓ `115200, 7E2`
  - ✗ `9601, 8N1` (invalid baud)

### IP Address
- **Purpose:** Network address
- **Required:** No
- **Format:** IPv4 `XXX.XXX.XXX.XXX`
- **Rules:** Each octet 0-255
- **Examples:**
  - ✓ `192.168.1.100`
  - ✓ `10.0.0.1`
  - ✗ `192.168.1.256` (invalid octet)

### Device Type
- **Purpose:** Device categorization
- **Required:** Yes
- **Format:** Selection from list
- **Options:**
  - IDC (Industrial Data Collector)
  - Temperature Sensor
  - Pressure Sensor
  - Flow Meter
  - Power Monitor
  - Custom Device

### Service Status
- **Purpose:** Operational status
- **Required:** Yes
- **Values:**
  - `0` - Unknown
  - `1` - In Service
  - `2` - Not in Service
- **Default:** Not in Service (2)

## Organization Fields

### Organization Name
- **Purpose:** Top-level entity identifier
- **Required:** Yes
- **Format:** 3-100 characters
- **Unique:** Yes (system-wide)
- **Allowed:** Letters, numbers, spaces, hyphens
- **Examples:**
  - ✓ `Acme Corporation`
  - ✓ `Branch-Office-01`
  - ✗ `AB` (too short)

### Organization Code
- **Purpose:** Short identifier
- **Required:** Auto-generated
- **Format:** 2-10 uppercase letters
- **Unique:** Yes
- **Examples:** `ACME`, `BRANCH01`

## Site Fields

### Site Name
- **Purpose:** Location identifier
- **Required:** Yes
- **Format:** 3-50 characters
- **Unique:** Within organization
- **Examples:**
  - ✓ `Main Building`
  - ✓ `Warehouse-A`
  - ✗ Duplicate names in same org

### Site Type
- **Purpose:** Site classification
- **Required:** Yes
- **Options:**
  - Physical (building/location)
  - Virtual (cloud/remote)
  - Mobile (vehicle/portable)

### Time Zone
- **Purpose:** Local time reference
- **Required:** No
- **Format:** IANA timezone
- **Examples:** `America/New_York`, `Europe/London`

## User Account Fields

### Username
- **Purpose:** Login identifier
- **Required:** Yes
- **Format:** 3-30 characters
- **Unique:** Yes (system-wide)
- **Allowed:** Letters, numbers, dots, underscores
- **Case:** Sensitive
- **Examples:**
  - ✓ `john.doe`
  - ✓ `admin_user`
  - ✗ `john doe` (space not allowed)

### Email
- **Purpose:** Contact and notifications
- **Required:** Yes
- **Format:** Valid email
- **Unique:** Recommended
- **Examples:**
  - ✓ `user@company.com`
  - ✗ `user@` (incomplete)

### Password
- **Purpose:** Authentication
- **Required:** Yes
- **Rules:**
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number
  - At least 1 special character
  - Cannot match last 5 passwords

### Display Name
- **Purpose:** User's full name
- **Required:** Yes
- **Format:** 1-100 characters
- **Examples:** `John Doe`, `Jane Smith-Wilson`

### Role
- **Purpose:** Access level
- **Required:** Yes
- **Options:**
  - Administrator
  - Organization Administrator
  - User

## Gateway Fields

### Gateway Name
- **Purpose:** Gateway identifier
- **Required:** Yes
- **Format:** 3-50 characters
- **Unique:** Within organization

### Port Range
- **Purpose:** TCP port allocation
- **Required:** Yes
- **Format:** Start-End (e.g., 8000-8999)
- **Rules:**
  - Ports 1024-65535
  - Range size 10-1000 ports
  - No overlap with other gateways

## Validation Error Messages

| Field | Error | Solution |
|-------|-------|----------|
| MAC Address | "Already exists" | Check for duplicate device |
| MAC Format | "Invalid format" | Use `00:17:BF:XX:XX:XX` |
| Serial Settings | "Invalid format" | Use format like `9600, 8N1` |
| Username | "Already taken" | Choose different username |
| Password | "Too weak" | Meet all requirements |
| Organization | "Name exists" | Use unique name |
| Site | "Duplicate in org" | Choose different name |
| Port Range | "Overlapping range" | Select different ports |
| IP Address | "Invalid format" | Use valid IPv4 format |

## Special Characters

### Allowed in Most Fields
- Letters (a-z, A-Z)
- Numbers (0-9)
- Hyphen (-)
- Underscore (_)

### Not Allowed
- Special characters (@, #, $, %, &, etc.)
- Emojis
- Control characters
- Line breaks (except in descriptions)

## Field Limits

| Field Type | Min | Max |
|------------|-----|-----|
| Short Text | 1 | 50 |
| Long Text | 1 | 255 |
| Description | 0 | 1000 |
| Number | 0 | 999999 |
| Port | 1024 | 65535 |
| Percentage | 0 | 100 |