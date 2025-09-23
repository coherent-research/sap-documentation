---
id: managing-devices
title: Managing Devices
sidebar_label: Managing Devices
---

# Managing Devices

Complete guide to device management in SAP.

## Viewing Devices

After logging in, click **Devices** in the navigation to see your device list.

### Device Information Display

Each device shows:
- **Device Tag** - Friendly name
- **MAC Address** - Hardware identifier
- **IP Address** - Network address
- **Organization/Site** - Location
- **Status** - Online/Offline indicator
- **Last Update** - Recent activity timestamp

## Adding a New Device

:::note
Requires Administrator or Organization Administrator role.
:::

1. Click **"New Device"** button
2. Fill in required fields:
   - **Device Tag**: Descriptive name (3-50 characters)
   - **MAC Address**: Format `00:17:BF:XX:XX:XX`
   - **Serial Settings**: e.g., "9600, 8N1"
   - **Organization**: Select from dropdown
   - **Site**: Select from dropdown
3. Optional fields:
   - **IP Address**: If statically assigned
   - **Device Type**: Category selection
   - **Service Status**: Initial status
4. Click **"Save"**

## Editing Devices

1. **Click on the device** row in the list
2. Click **"Edit"** button
3. Modify the needed fields
4. Click **"Save"**

:::warning
Changing MAC address may affect device connectivity.
:::

## Bulk Operations

### Selecting Multiple Devices

1. **Enable selection** mode with filters
2. **Check boxes** appear next to devices
3. **Select devices** individually or use "Select All"

### Available Bulk Actions

- **Delete** - Remove multiple devices
- **Move** - Relocate to different site
- **Set Service Status** - Update status in bulk

### Bulk Device Creation

For adding multiple similar devices:

1. Click **"Bulk Create"**
2. Enter:
   - **Starting MAC address**
   - **Serial pattern**
   - **Number of devices**
   - **Target organization and site**
3. **Preview** the devices to be created
4. Click **"Create All"**

## Device Status

### Status Indicators

- **🟢 Green (Online)** - Device active, heartbeat within 5 minutes
- **🔴 Red (Offline)** - No heartbeat for >5 minutes
- **🟡 Yellow (Warning)** - Intermittent connectivity
- **⚫ Gray (Unknown)** - Never connected

### Monitoring Device Health

1. Click on a device to view details
2. Check the **Status History** tab
3. Review:
   - Connection timeline
   - Recent events
   - Error logs

## Device Configuration

### Serial Settings

Format: `[baud rate], [data][parity][stop]`

Common configurations:
- `9600, 8N1` - Standard
- `115200, 8N1` - High speed
- `9600, 7E1` - Even parity

### TCP Port Assignment

- **Automatic** - System assigns available port
- **Manual** - Specify port (admin only)
- **Range** - Typically 8000-8999 per gateway

## Troubleshooting Devices

### Device Shows Offline

1. **Check physical connection**
2. **Verify network connectivity**
3. **Confirm correct MAC address**
4. **Review gateway status**
5. **Check firewall rules**

### Cannot Add Device

- **"MAC already exists"** - Device already registered
- **"Invalid format"** - Check MAC/serial format
- **"No available ports"** - Gateway port limit reached

### Device Not Updating

1. Check **Last Update** timestamp
2. Verify **Serial Settings** match device
3. Ensure **Gateway** is online
4. Review **Event Logs** for errors