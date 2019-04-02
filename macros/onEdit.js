function onEdit(event) {
    var isApplicableRow = 6;
    var tableRange = "A2:H200";

    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var editedCell = sheet.getActiveCell();

    if (editedCell.getColumn() == isApplicableRow) {
        var range = sheet.getRange(tableRange);
        range.sort({ column : isApplicableRow, ascending: false });
    }
}
