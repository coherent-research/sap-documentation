---
id: filtering-searching
title: Filtering and Searching
sidebar_label: Filtering & Searching
---

# Filtering and Searching

Efficiently find the information you need using filters and search.

## Using Filters

### Available Filters

Most data tables include these filter options:

- **Organization** - Filter by organization (if you have access to multiple)
- **Site** - Filter by specific site
- **Status** - Online/Offline/Error status
- **Device Type** - IDC, Temperature sensor, etc.
- **Service Status** - In Service/Not in Service/Unknown
- **Date Range** - Filter by creation or update date

### Applying Filters

1. **Locate the filter panel** above the data table
2. **Select filter values** from dropdowns
3. The list **updates automatically**
4. **Combine multiple filters** for precise results

:::tip Pro Tip
Use Ctrl+Click to select multiple values in filter dropdowns.
:::

## Search Functionality

### Basic Search

1. **Type in the search box**
2. Press **Enter** or wait for auto-search
3. Results show matches from:
   - Device names/tags
   - MAC addresses
   - IP addresses
   - Serial numbers

### Advanced Search Tips

- **Partial matching**: Type "SENS" to find "SENSOR-001", "SENSOR-002", etc.
- **MAC search**: Enter partial MAC like "A1:B2" to find all matching devices
- **Case-insensitive**: Searches ignore case

## Filter Combinations

### Common Scenarios

**Find offline devices in Building A:**

1. Set Site = "Building A"
2. Set Status = "Offline"

**Find all temperature sensors needing service:**

1. Set Device Type = "Temperature Sensor"
2. Set Service Status = "Not in Service"

**Find recent additions:**

1. Set Date Range = "Last 7 days"
2. Sort by "Date Added"

## Saving Filters

Your last used filters are remembered during your session:

- Filters persist as you navigate
- Clear all filters with the "Reset" button
- Log out to completely reset filters

## Performance Tips

- **Use specific filters** to reduce data load
- **Start broad, then narrow** your search
- **Export filtered results** for offline analysis
