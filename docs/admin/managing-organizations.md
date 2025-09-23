---
id: managing-organizations
title: Managing Organizations
sidebar_label: Organizations
---

# Managing Organizations

:::note
This feature is available to System Administrators only.
:::

## Overview

Organizations are the top-level entities in SAP, containing sites, users, and devices.

## Viewing Organizations

1. Click **Organizations** in the navigation bar
2. The list displays:
   - Organization name
   - Number of users
   - Number of sites
   - Number of devices
   - Number of gateways
   - Creation date

## Creating an Organization

1. Click **"New Organization"**
2. Enter the **organization name**
   - Must be unique
   - 3-100 characters
   - Letters, numbers, spaces, hyphens allowed
3. Optional: Add description
4. Click **"Save"**

:::tip
Use a consistent naming convention like "CompanyName - Department" for clarity.
:::

## Editing Organizations

1. Click on an organization in the list
2. Click **"Edit"**
3. Update the organization details:
   - Name
   - Description
   - Status (Active/Inactive)
4. Click **"Save"**

:::warning
Changing organization names may affect integrations and reports.
:::

## Organization Management

### Adding Sites

1. Select the organization
2. Click **"Add Site"**
3. Enter site details
4. Site is automatically linked to the organization

### Managing Users

1. Select the organization
2. View the **Users** tab
3. Options:
   - Add new users
   - Edit user roles
   - Remove users from organization
   - Reset passwords

### Device Overview

View all devices within an organization:
1. Select the organization
2. Click **Devices** tab
3. See device distribution across sites
4. Export device lists

## Organization Settings

### Access Control
- Define organization-wide permissions
- Set default user roles
- Configure approval workflows

### Quotas and Limits
- Maximum devices per site
- User account limits
- Gateway restrictions

## Deleting Organizations

:::danger
Deleting an organization is permanent and removes all associated data.
:::

Before deleting:
1. **Export all data** you need to retain
2. **Reassign devices** to other organizations if needed
3. **Notify users** of the pending deletion

To delete:
1. Select the organization
2. Click **"Delete Organization"**
3. Type the organization name to confirm
4. Click **"Permanently Delete"**