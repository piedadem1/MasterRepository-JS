function doGet(e) {
  var sheet = SpreadsheetApp.getActive();
  var googlesheetapi = sheet.getSheetByName("sheet1");
  var data = [];
  var rnum = googlesheetapi.getLastRow();
  var rlen = rnum;
  var clen = googlesheetapi.getLastColumn();
  var rows = googlesheetapi.getRange(2,3,rlen,clen).getValues();
      for(var i = 1; i < rnum ; i++) {
        var datarow = rows[i];
        var record = {};
          for(var j=1; j < clen ; j++){
            record[rows[0][j]] = datarow[j];
            console.log(rows);
          }
        /**console.log(data);*/
        data.push(record);
         MailApp.sendEmail('', 'This is a functionality test for scheduled Notification', 'This is a functionality test. This is a reminder to please be sure to fill out your recovery forms.', {data});
      }
        console.log(data);
        var results = JSON.stringify(data)
        return ContentService.createTextOutput(results).setMimeType(ContentService.MimeType.JSON);
}
