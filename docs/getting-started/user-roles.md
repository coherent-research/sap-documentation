---
id: user-roles
title: User Roles Overview
sidebar_label: User Roles
---

# User Roles Overview

The SAP system uses role-based access control to ensure users have appropriate permissions.

## Available Roles

### Administrator
- **Full system access**
- Manage all organizations and sites
- Create and manage all user accounts
- Access to all devices and gateways
- System configuration privileges

### Organization Administrator
- **Organization-level access**
- Manage sites within their organization
- Create and manage users in their organization
- Full access to organization's devices
- Cannot access other organizations

### User
- **Limited access**
- View and manage devices in assigned sites
- Update device configurations
- Cannot create new sites or users
- Read-only access to gateway information

## Quick Reference

| Action | Admin | Org Admin | User |
|--------|-------|-----------|------|
| View all devices | ✓ | Own Org | Assigned |
| Add/Edit devices | ✓ | ✓ | Edit only |
| Delete devices | ✓ | ✓ | ✗ |
| Manage sites | ✓ | ✓ | ✗ |
| Manage users | ✓ | Own Org | ✗ |
| System settings | ✓ | ✗ | ✗ |

For detailed permissions, see [User Roles Reference](/reference/user-roles).