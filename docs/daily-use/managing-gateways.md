---
id: managing-gateways
title: Managing Gateways
sidebar_label: Managing Gateways
---

# Managing Gateways

## What is a Gateway?

A gateway is a network communication hub that connects multiple devices to the SAP system. Think of it as a bridge that allows devices to communicate with the central system.

### Key Functions
- Routes device data to the SAP system
- Manages TCP port assignments for connected devices
- Provides access control to multiple sites
- Monitors device connectivity and status

## Viewing Gateways

Click **Gateways** in the navigation bar to see available gateways.

### Gateway Information

Each gateway displays:
- **Name and ID** - Unique identifier
- **Connected devices** - Number of active connections
- **Status** - Online/Offline state
- **Organization/Site** - Deployment location
- **IP Address** - Network location
- **Port Range** - Available TCP ports (e.g., 8000-8999)

## Gateway Details

Click a gateway row to view:

### Overview Tab
- Basic gateway information
- Current status and health
- Configuration details
- Network information

### Connected Devices Tab
- List of all connected devices
- Device status and port assignments
- Last communication timestamps
- Quick access to device details

### Diagnostics Tab
- Connection logs
- Error messages
- Performance metrics
- Troubleshooting information

## Adding a Gateway

:::note
Requires Administrator or Organization Administrator role.
:::

1. Click **"New Gateway"**
2. Enter required information:
   - **Gateway Name** - Descriptive identifier
   - **Organization** - Select from dropdown
   - **Site** - Select deployment site
   - **IP Address** - Gateway's network address
   - **Port Range** - Start and end ports
3. Click **"Save"**

## Gateway Configuration

### Port Management
- Each gateway has a defined port range
- Ports are automatically assigned to devices
- Monitor port usage in the gateway details

### Network Settings
- **IP Address** - Must be accessible from devices
- **Subnet Mask** - Network configuration
- **Gateway Address** - Default route
- **DNS Servers** - Name resolution

## Troubleshooting Gateways

### Gateway Shows Offline

1. **Check network connectivity**
   - Ping the gateway IP
   - Verify firewall rules
   - Check VPN connection if required

2. **Verify gateway service**
   - Ensure gateway software is running
   - Check system logs
   - Restart gateway service if needed

### Devices Not Connecting

1. **Check port availability**
   - Verify ports aren't exhausted
   - Review port assignments
   - Expand port range if needed

2. **Review gateway logs**
   - Check for connection errors
   - Verify device authentication
   - Look for network issues