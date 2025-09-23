---
id: user-roles
title: User Roles Reference
sidebar_label: User Roles Reference
---

# User Roles Reference

Detailed permissions and capabilities for each user role.

## Role Overview

The SAP system uses three hierarchical user roles:

1. **Administrator** - Full system access
2. **Organization Administrator** - Organization-wide access
3. **User** - Limited access to assigned resources

## Administrator

### Description
System administrators have complete control over all aspects of the SAP application.

### Key Responsibilities
- System configuration and maintenance
- Organization and site management
- User account administration
- System monitoring and troubleshooting
- Security and compliance oversight

### Permissions

#### Organization Management
- ✅ Create organizations
- ✅ Edit organization details
- ✅ Delete organizations
- ✅ View all organizations
- ✅ Manage organization settings

#### Site Management
- ✅ Create sites in any organization
- ✅ Edit all sites
- ✅ Delete sites
- ✅ Move sites between organizations
- ✅ Configure site settings

#### User Management
- ✅ Create user accounts
- ✅ Assign any role
- ✅ Modify user permissions
- ✅ Delete user accounts
- ✅ Reset passwords
- ✅ View audit logs for all users

#### Device Management
- ✅ Full access to all devices
- ✅ Add/edit/delete devices
- ✅ Bulk device operations
- ✅ Configure device settings
- ✅ View all device data

#### Gateway Management
- ✅ Add/configure gateways
- ✅ Modify gateway settings
- ✅ Delete gateways
- ✅ Manage port allocations
- ✅ View diagnostics

#### System Functions
- ✅ Access system settings
- ✅ Configure integrations
- ✅ Manage licenses
- ✅ View system logs
- ✅ Perform backups
- ✅ Execute maintenance tasks

## Organization Administrator

### Description
Organization administrators manage resources within their assigned organization.

### Key Responsibilities
- Organization-specific configuration
- Site and device management
- User administration within organization
- Organization monitoring and reporting

### Permissions

#### Organization Management
- ❌ Create organizations
- ✅ Edit own organization details
- ❌ Delete organizations
- ✅ View own organization
- ✅ Manage own organization settings

#### Site Management
- ✅ Create sites in own organization
- ✅ Edit sites in own organization
- ✅ Delete sites in own organization
- ❌ Move sites between organizations
- ✅ Configure site settings

#### User Management
- ✅ Create users in own organization
- ✅ Assign User or Org Admin role
- ❌ Assign Administrator role
- ✅ Modify users in own organization
- ✅ Delete users in own organization
- ✅ Reset passwords for own users
- ✅ View audit logs for own organization

#### Device Management
- ✅ Full access to organization devices
- ✅ Add/edit/delete devices
- ✅ Bulk device operations
- ✅ Configure device settings
- ❌ Access other org devices

#### Gateway Management
- ✅ Add gateways to own organization
- ✅ Configure own gateways
- ✅ Delete own gateways
- ✅ Manage port allocations
- ✅ View diagnostics

#### System Functions
- ❌ Access system settings
- ❌ Configure integrations
- ❌ Manage licenses
- ✅ View organization logs
- ❌ Perform backups
- ❌ Execute maintenance tasks

## User

### Description
Standard users have access to view and manage devices within their assigned sites.

### Key Responsibilities
- Device monitoring and management
- Basic configuration updates
- Data viewing and reporting
- Issue identification

### Permissions

#### Organization Management
- ❌ Create organizations
- ❌ Edit organization details
- ❌ Delete organizations
- ✅ View own organization info
- ❌ Manage organization settings

#### Site Management
- ❌ Create sites
- ❌ Edit sites
- ❌ Delete sites
- ❌ Move sites
- ✅ View assigned sites

#### User Management
- ❌ Create user accounts
- ❌ Assign roles
- ❌ Modify other users
- ❌ Delete user accounts
- ❌ Reset other passwords
- ✅ Change own password
- ✅ View own activity logs

#### Device Management
- ✅ View devices in assigned sites
- ✅ Edit device configurations
- ❌ Add new devices
- ❌ Delete devices
- ❌ Move devices
- ✅ Update device status

#### Gateway Management
- ✅ View gateway information
- ❌ Add gateways
- ❌ Configure gateways
- ❌ Delete gateways
- ❌ Manage ports
- ✅ View basic diagnostics

#### System Functions
- ❌ Access system settings
- ❌ Configure integrations
- ❌ Manage licenses
- ✅ View own activity logs
- ❌ Perform backups
- ❌ Execute maintenance

## Permission Matrix

| Feature | Administrator | Org Administrator | User |
|---------|--------------|-------------------|------|
| **Organizations** |
| Create | ✅ | ❌ | ❌ |
| View All | ✅ | Own Only | Own Only |
| Edit | ✅ | Own Only | ❌ |
| Delete | ✅ | ❌ | ❌ |
| **Sites** |
| Create | ✅ | ✅ | ❌ |
| View All | ✅ | Own Org | Assigned |
| Edit | ✅ | Own Org | ❌ |
| Delete | ✅ | Own Org | ❌ |
| **Users** |
| Create | ✅ | Own Org | ❌ |
| View All | ✅ | Own Org | Self |
| Edit | ✅ | Own Org | Self |
| Delete | ✅ | Own Org | ❌ |
| **Devices** |
| Create | ✅ | ✅ | ❌ |
| View All | ✅ | Own Org | Assigned |
| Edit | ✅ | ✅ | ✅ |
| Delete | ✅ | ✅ | ❌ |
| Bulk Ops | ✅ | ✅ | Limited |
| **Gateways** |
| Create | ✅ | ✅ | ❌ |
| Configure | ✅ | ✅ | ❌ |
| View | ✅ | ✅ | ✅ |
| Delete | ✅ | ✅ | ❌ |
| **Reports** |
| System | ✅ | ❌ | ❌ |
| Organization | ✅ | ✅ | ❌ |
| Site | ✅ | ✅ | ✅ |
| Device | ✅ | ✅ | ✅ |
| **Settings** |
| System | ✅ | ❌ | ❌ |
| Organization | ✅ | ✅ | ❌ |
| Personal | ✅ | ✅ | ✅ |

## Special Permissions

### Time-Based Access
Administrators can grant temporary elevated permissions:
- Duration: 1 hour to 30 days
- Auto-revoke after expiration
- Audit trail maintained

### Site-Specific Overrides
Users can be granted additional permissions for specific sites:
- Device creation rights
- Bulk operation access
- Extended viewing permissions

### Read-Only Mode
Any role can be set to read-only:
- View all permitted data
- No create/edit/delete operations
- Useful for auditors or observers

## Role Assignment Guidelines

### Choosing the Right Role

**Assign Administrator when:**
- User needs cross-organization access
- System configuration required
- Security/compliance responsibilities

**Assign Org Administrator when:**
- User manages single organization
- Site and user management needed
- No system-wide access required

**Assign User when:**
- Basic device management only
- Limited to specific sites
- No administrative duties

## Audit and Compliance

All role-based actions are logged:
- Role assignments/changes
- Permission usage
- Access attempts
- Data modifications

Audit logs include:
- User identity
- Timestamp
- Action performed
- Success/failure status
- Affected resources