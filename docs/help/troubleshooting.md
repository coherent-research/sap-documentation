---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

Solutions for common issues and problems.

## Login Issues

### Cannot Sign In

**Symptoms:** Unable to access the system with your credentials

**Solutions:**
1. **Check credentials**
   - Verify username is correct (case-sensitive)
   - Ensure CAPS LOCK is off
   - Try copy-paste to avoid typos

2. **Account locked**
   - After 5 failed attempts, accounts lock for 15 minutes
   - Wait or contact administrator for unlock

3. **Password expired**
   - Use "Reset Password" link
   - Check email for reset instructions

### Session Expired

**Symptoms:** "Your session has expired" message

**Solutions:**
- Sessions expire after 30 minutes of inactivity
- Simply log in again to continue
- Enable "Remember Me" for longer sessions (if available)

## Display Issues

### Missing Data

**Symptoms:** Expected data not showing in lists

**Solutions:**
1. **Check filters**
   - Click "Reset Filters" to clear all
   - Verify organization/site selection
   - Check date ranges

2. **Permissions**
   - Confirm you have access to the data
   - Contact admin for permission changes

3. **Browser cache**
   - Press F5 to refresh
   - Clear browser cache (Ctrl+Shift+Delete)
   - Try incognito/private mode

### Slow Performance

**Symptoms:** Pages load slowly, timeouts

**Solutions:**
1. **Reduce data load**
   - Use filters to limit results
   - Decrease page size (items per page)
   - Export large datasets instead of viewing

2. **Browser optimization**
   - Close unnecessary tabs
   - Update to latest browser version
   - Disable problematic extensions

3. **Network issues**
   - Check internet connection speed
   - Verify VPN connection (if required)
   - Try during off-peak hours

## Device Issues

### Device Shows Offline

**Symptoms:** Device status red/offline

**Troubleshooting steps:**
1. **Physical checks**
   - Verify device is powered on
   - Check network cables
   - Confirm device configuration

2. **Network verification**
   - Ping device IP address
   - Check firewall rules
   - Verify gateway connectivity

3. **Configuration**
   - Confirm MAC address is correct
   - Verify serial settings match device
   - Check TCP port assignment

### Cannot Add Device

**Error: "MAC Address already exists"**
- Device is already registered
- Search for existing device
- Delete old entry if duplicate

**Error: "Invalid MAC format"**
- Use format: `00:17:BF:XX:XX:XX`
- All characters must be hex (0-9, A-F)
- Include colons between pairs

**Error: "No available ports"**
- Gateway port range exhausted
- Expand port range in gateway settings
- Move device to different gateway

## Data Issues

### Cannot Edit Records

**Symptoms:** Edit button disabled or missing

**Solutions:**
- Verify you have edit permissions
- Check if record is locked by another user
- Ensure you're in the correct organization
- Confirm object isn't in read-only state

### Bulk Operations Failing

**Symptoms:** Bulk operations timeout or fail

**Solutions:**
1. **Reduce batch size**
   - Process 50 items instead of 500
   - Split operation into multiple batches

2. **Check constraints**
   - Verify no duplicate values
   - Ensure all required fields present
   - Confirm target locations exist

3. **System resources**
   - Try during low-usage periods
   - Check with admin for system status

## Export/Import Issues

### Export Not Working

**Symptoms:** Export button doesn't respond or fails

**Solutions:**
- Check browser popup blocker
- Verify you have export permissions
- Try different export format
- Reduce amount of data to export

### Import Errors

**Error: "Invalid file format"**
- Use provided template
- Save as .csv (not .xlsx)
- Check for special characters

**Error: "Duplicate entries"**
- Remove duplicates from file
- Check for existing records
- Use update instead of create

## Browser-Specific Issues

### Chrome
- Clear cache: Settings → Privacy → Clear browsing data
- Disable extensions causing conflicts
- Update to latest version

### Firefox
- Reset Firefox: Help → Troubleshooting → Refresh
- Check security settings
- Disable tracking protection for site

### Safari
- Enable cookies for site
- Clear website data: Preferences → Privacy
- Check Safari version compatibility

### Edge
- Clear cache and cookies
- Check compatibility mode settings
- Disable strict tracking prevention

## Getting Help

If issues persist:

1. **Document the problem**
   - Take screenshots
   - Note error messages exactly
   - Record steps to reproduce

2. **Contact support**
   - Use in-app support if available
   - Email your administrator
   - Include all documentation

3. **Escalation**
   - Follow organization's escalation process
   - Provide ticket/case number
   - Include urgency level