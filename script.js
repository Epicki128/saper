$(() => {
  let array = [];
  let flags = 15;
  let fields = 0;
  let startTime = new Date();

  for (let i = 0; i < 15; i++) {
    let r = Math.floor(Math.random() * 81) + 1;
    if (!array.includes(r)) {
      array.push(r);
    } else {
      i--;
      continue;
    }
  }

  $(".field").mousedown(function (event) {
    if (!$(this).html().includes("</i>") && $(this).attr("data-klik") != "1") {
      if (event.which == 1) {
        $(this).css("background-color", "rgb(249, 220, 186)");
        $(this).attr("data-klik", "1");

        if (array.includes(Number($(this).attr("id").replace("f", "")))) {
          $(this).html('<i class="fa-solid fa-bomb"></i>');
          let endTime = new Date();
          let eTime = endTime - startTime;
          let seconds = Math.round(eTime / 1000);
          let minutes = Math.round(seconds / 60);

          $(".header").html("Przegrałeś :(");
          $(".time").html("Zajęło ci to: " + minutes + "min");
          $(".info").show();
        } else {
          let bcount = 0;
          let cid = Number($(this).attr("id").replace("f", ""));

          if (cid == 1) {
            array.includes(2) ? bcount++ : null;
            array.includes(10) ? bcount++ : null;
            array.includes(11) ? bcount++ : null;
          } else if (cid == 9) {
            array.includes(8) ? bcount++ : null;
            array.includes(17) ? bcount++ : null;
            array.includes(18) ? bcount++ : null;
          } else if (cid == 73) {
            array.includes(74) ? bcount++ : null;
            array.includes(64) ? bcount++ : null;
            array.includes(65) ? bcount++ : null;
          } else if (cid == 81) {
            array.includes(80) ? bcount++ : null;
            array.includes(72) ? bcount++ : null;
            array.includes(71) ? bcount++ : null;
          } else if (cid <= 9) {
            array.includes(cid - 1) ? bcount++ : null;
            array.includes(cid + 1) ? bcount++ : null;
            array.includes(cid + 8) ? bcount++ : null;
            array.includes(cid + 9) ? bcount++ : null;
            array.includes(cid + 10) ? bcount++ : null;
          } else if (cid > 72) {
            array.includes(cid - 1) ? bcount++ : null;
            array.includes(cid + 1) ? bcount++ : null;
            array.includes(cid - 8) ? bcount++ : null;
            array.includes(cid - 9) ? bcount++ : null;
            array.includes(cid - 10) ? bcount++ : null;
          } else if (cid % 9 == 1) {
            array.includes(cid - 9) ? bcount++ : null;
            array.includes(cid + 9) ? bcount++ : null;
            array.includes(cid + 10) ? bcount++ : null;
            array.includes(cid + 1) ? bcount++ : null;
            array.includes(cid - 8) ? bcount++ : null;
          } else if (cid % 9 == 0) {
            array.includes(cid - 9) ? bcount++ : null;
            array.includes(cid + 9) ? bcount++ : null;
            array.includes(cid - 10) ? bcount++ : null;
            array.includes(cid - 1) ? bcount++ : null;
            array.includes(cid + 8) ? bcount++ : null;
          } else {
            array.includes(cid - 10) ? bcount++ : null;
            array.includes(cid - 9) ? bcount++ : null;
            array.includes(cid - 8) ? bcount++ : null;
            array.includes(cid - 1) ? bcount++ : null;
            array.includes(cid + 1) ? bcount++ : null;
            array.includes(cid + 8) ? bcount++ : null;
            array.includes(cid + 9) ? bcount++ : null;
            array.includes(cid + 10) ? bcount++ : null;
          }

          bcount != 0 ? $(this).html(bcount) : null;

          fields++;
        }
      } else if (event.which == 3 && flags > 0) {
        $(this).html('<i class="fa-solid fa-flag"></i>');
        flags--;
        $(".fcount").html(flags);
      }
    } else if ($(this).html().includes("</i>")) {
      if (event.which == 3) {
        $(this).html("");
        flags++;
        $(".fcount").html(flags);
      }
    }
    if (fields == 76 && flags == 0) {
      let endTime = new Date();
      let eTime = endTime - startTime;
      let seconds = Math.round(eTime / 1000);
      let minutes = Math.round(seconds / 60);

      $(".header").html("Wygrałeś!");
      $(".time").html("GRATULACJE! Zajęło ci to: " + minutes + "min");
      $(".info").show();
    }
  });

  $(".field").on("contextmenu", function (event) {
    event.preventDefault();
  });
});
