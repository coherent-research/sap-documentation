---
id: bulk-operations
title: Bulk Operations
sidebar_label: Bulk Operations
---

# Bulk Operations

Efficiently manage multiple items at once.

## Bulk Device Operations

### Selecting Multiple Devices

1. Apply filters to narrow your list
2. Checkboxes appear next to each device
3. Select devices:
   - Click individual checkboxes
   - Use **"Select All"** for current page
   - Use **"Select All Matching"** for all filtered results

### Moving Devices

Move multiple devices to a different site:

1. Select devices to move
2. Click **"Move Devices"**
3. Choose destination:
   - **Organization** (if admin)
   - **Site**
4. Review impact:
   - Port reassignments
   - Gateway changes
   - User access modifications
5. Click **"Confirm Move"**

:::warning
Moving devices may temporarily interrupt their connectivity.
:::

### Deleting Devices

1. Select devices to delete
2. Click **"Delete Devices"**
3. Review the list
4. Type **"DELETE"** to confirm
5. Click **"Permanently Delete"**

### Setting Service Status

Update service status for multiple devices:

1. Select target devices
2. Click **"Set Service Status"**
3. Choose new status:
   - **In Service** - Device operational
   - **Not in Service** - Device offline
   - **Maintenance** - Temporary service
4. Optional: Add notes
5. Click **"Update Status"**

## Bulk Device Creation

### Creating Multiple Devices

For adding many similar devices:

1. Click **"Bulk Create"**
2. Enter base configuration:
   - **Device Tag Pattern** - e.g., "SENSOR-\{001-100\}"
   - **Starting MAC Address** - e.g., "00:17:BF:A0:00:01"
   - **Number of Devices** - Up to 100 at once
   - **Serial Settings** - Applied to all
3. Select location:
   - **Organization**
   - **Site**
   - **Gateway** (optional)
4. Review preview:
   - Check generated names
   - Verify MAC addresses
   - Confirm settings
5. Click **"Create All Devices"**

### MAC Address Generation

The system automatically increments MAC addresses:
- Starting: `00:17:BF:A0:00:01`
- Next: `00:17:BF:A0:00:02`
- And so on...

:::tip
Leave gaps in MAC ranges for future expansion.
:::

## Bulk User Operations

### Creating Multiple Users

1. Click **"Bulk Add Users"**
2. Choose method:
   - **CSV Import** - Upload user list
   - **Manual Entry** - Enter multiple users
   - **AD Sync** - Import from Active Directory
3. Set default settings:
   - **Role** - Applied to all users
   - **Organization** - Default assignment
   - **Password Policy** - Generation rules
4. Review and confirm

### CSV Import Format

```csv
username,email,display_name,role,organization
john.doe,john@company.com,John Doe,User,Main Office
jane.smith,jane@company.com,Jane Smith,OrgAdmin,Branch Office
```

## Bulk Site Operations

### Creating Multiple Sites

1. Click **"Bulk Create Sites"**
2. Enter site information:
   - Upload CSV with site details
   - Or use naming pattern
3. Set common properties:
   - **Organization**
   - **Time Zone**
   - **Default Gateway**
4. Review and create

## Export Operations

### Exporting Data

1. Apply filters to select data
2. Click **"Export"**
3. Choose format:
   - **CSV** - Comma-separated
   - **Excel** - .xlsx format
   - **JSON** - For integrations
4. Select fields to include
5. Download file

### Scheduled Exports

Set up automatic exports:
1. Click **"Schedule Export"**
2. Configure:
   - **Frequency** - Daily/Weekly/Monthly
   - **Filters** - What to include
   - **Format** - File type
   - **Destination** - Email/FTP/API
3. Save schedule

## Best Practices

### Before Bulk Operations

- **Backup data** before major changes
- **Test with small batch** first
- **Verify filters** are correct
- **Check permissions** for all affected items

### During Operations

- **Monitor progress** bar
- **Don't navigate away** during processing
- **Check for errors** in results
- **Save operation log** for records

### After Operations

- **Verify results** match expectations
- **Check affected systems** for impact
- **Document changes** for audit trail
- **Notify affected users** if needed