function onEdit(event) {
    var isApplicableRow = 5;
    var tableRange = "A2:H200";

    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var editedCell = sheet.getActiveCell();

    if (editedCell.getValue() === 'Not Applicable') {
        var range = sheet.getRange(tableRange);
        range.sort({ column : isApplicableRow, ascending: false });
    }
}
