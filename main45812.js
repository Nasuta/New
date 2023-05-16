$(document).ready(function () {
  $("#get-data").click(function () {
    // $.getJSON('https://akademia108.pl/api/ajax/get-post.php') or
    $.get("https://akademia108.pl/api/ajax/get-post.php")

      .done(function (data) {
        let pId = $("<p></p>").text(`Post Id: ${data.id}`);
        let pUserId = $("<p></p>").text(`User Id: ${data.userId}`);
        let pTitle = $("<p></p>").text(`Title: ${data.title}`);
        let pBody = $("<p></p>").text(`Body: ${data.body}`);
        let hr = $("<hr/>");
        console.log(data);
        let jqBody = $("body");

        jqBody.append(pId);
        jqBody.append(pUserId);
        jqBody.append(pTitle);
        jqBody.append(pBody);
        jqBody.append(hr);
      })

      .fail(function (error) {
        console.error(error);
      });
  });
});

console.log();
