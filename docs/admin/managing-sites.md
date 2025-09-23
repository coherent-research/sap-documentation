---
id: managing-sites
title: Managing Sites
sidebar_label: Sites
---

# Managing Sites

Sites represent physical or logical locations within an organization.

## Viewing Sites

Click **Sites** in the navigation to see:
- Site name
- Parent organization
- Number of devices
- Number of gateways
- Active users
- Creation date

## Creating a Site

:::note
Requires Administrator or Organization Administrator role.
:::

1. Click **"New Site"**
2. Enter required information:
   - **Site Name** - Descriptive name
   - **Organization** - Select parent organization
   - **Site Type** - Physical/Virtual/Cloud
3. Optional fields:
   - **Address** - Physical location
   - **Contact** - Site manager
   - **Time Zone** - For scheduling
4. Click **"Save"**

## Site Configuration

### Basic Information
- **Name** - Unique within organization
- **Code** - Short identifier (auto-generated)
- **Description** - Purpose and details
- **Status** - Active/Inactive/Maintenance

### Location Details
- **Address** - Full physical address
- **GPS Coordinates** - For mapping
- **Time Zone** - Local time reference
- **Business Hours** - Operating schedule

### Contact Information
- **Site Manager** - Primary contact
- **Technical Contact** - IT support
- **Emergency Contact** - 24/7 availability

## Managing Site Resources

### Devices
1. View all devices at the site
2. Add new devices
3. Move devices between sites
4. Bulk update device settings

### Gateways
1. Assign gateways to sites
2. Configure gateway settings
3. Monitor gateway health
4. Manage port allocations

### Users
1. Assign users to sites
2. Set site-specific permissions
3. View user activity logs
4. Manage access schedules

## Site Operations

### Moving Sites

To move a site to a different organization:
1. Select the site
2. Click **"Move Site"**
3. Choose new organization
4. Confirm device and user impacts
5. Click **"Move"**

### Cloning Sites

Create a copy of site configuration:
1. Select the site
2. Click **"Clone Site"**
3. Enter new site name
4. Adjust settings as needed
5. Click **"Create Clone"**

## Deleting Sites

:::warning
Sites with active devices cannot be deleted.
:::

1. **Move or delete** all devices first
2. **Remove** gateway assignments
3. **Reassign** users to other sites
4. Click **"Delete Site"**
5. Confirm deletion