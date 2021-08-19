$("#city, #city2").prop("disabled", true);

var perlis = "<option>Perlis</option>";
var kedah =
  "<option>Sungai Petani</option><option>Alor Setar</option><option>Kulim</option><option>Kubang Pasu</option><option>Baling</option><option>Pendang</option><option>Langkawi</option><option>Yan</option><option>Sik</option><option>Padang Terap</option><option>Pokok Sena</option><option>Bandar Baharu</option>";
var penang = "<option>Goerge Town</option><option>Seberang Perai</option>";
var Perak =
  "<option>Kerian</option><option>Ipoh</option><option>Taiping</option><option>Manjung</option><option>Kuala Kangsar</option><option>Hulu Perak</option><option>Kinta</option><option>Batang Padang</option><option>Hilir Perak</option><option>Perak Tengah</option><option>Larut Matang</option>";
var selangor =
  "<option>Sabak Bernam</option><option>Kuala Selangor</option><option>Hulu Selangor</option><option>Gombak</option><option>Klang</option><option>Petaling</option><option>Hulu Langat</option><option>Kuala Langat</option><option>Sepang</option>";
var kl = "<option>Wilayah Persekutuan Kuala Lumpur</option>";
var putrajaya = "<option>Wilayah Persekutuan Putrajaya</option>";
var labuan = "<option>Wilayah Persekutuan Labuan</option>";
var negeriSembilan =
  "<option>Jelebu</option><option>Seremban</option><option>Jempol</option><option>Kuala Pilah</option><option>Port Dickson</option><option>Rembau</option><option>Tampin</option>";
var melaka =
  "<option>Masjid Tanah</option><option>Tangga Batu</option><option>Alor Gajah</option><option>Bukit Katil</option><option>Jasin</option>";
var johor =
  "<option>Ledang</option><option>Segamat</option><option>Muar</option><option>Batu Pahat</option><option>Kluang</option><option>Mersing</option><option>Pontian</option><option>Kulai Jaya</option><option>Kota Tinggi</option><option>Johor Bahru</option>";
var pahang =
  "<option>Lipis</option><option>Cameron Highlands</option><option>Jerantut</option><option>Raub</option><option>Bentong</option><option>Temerloh</option><option>Maran</option><option>Kuantan</option><option>Bera</option><option>Pekan</option><option>Rompin</option>";
var terengganu =
  "<option>Besut</option><option>Setiu</option><option>Kuala Terengganu</option><option>Hulu Terengganu</option><option>Marang</option><option>Dungun</option><option>Kemaman</option>";
var kelantan =
  "<option>Tumpat</option><option>Pasir Mas</option><option>Kota Bharu</option><option>Bachok</option><option>Pasir Puteh</option><option>Machang</option><option>Tanah Merah</option><option>Jeli</option><option>Kuala Krai</option><option>Gua Musang</option>";
var sabah =
  "<option>Kota Marudu</option><option>Kudat</option><option>Pitas</option><option>Kota Belud</option><option>Kota Kinabalu</option><option>Papar</option><option>Penampang</option><option>Putatan</option><option>Ranau</option><option>Tuaran</option><option>Beaufort</option><option>Keningau</option><option>Kuala Penyu</option><option>Nabawan</option><option>Sipitang</option><option>Tambunan</option><option>Tenom</option><option>Beluran</option><option>Kinabatangan</option><option>Sandakan</option><option>Tongod</option><option>Kunak</option><option>Lahad Datu</option><option>Semporna</option><option>Tawau</option>";
var sarawak =
  "<option>Limbang</option><option>Miri</option><option>Bintulu</option><option>Kapit</option><option>Sibu</option><option>Mukah</option><option>Sarikei</option><option>Sri Aman</option><option>Samarahan</option><option>Kuching</option><option>Betong</option>";

$("#state, #state2").change(function () {
  // Get the selected value
  var selected = $(this).val();

  // Show states dropdown
  $("#city, #city2").prop("disabled", false);

  // If West Malaysia selected, show West Malaysia states
  if (selected == "Perlis") {
    // Show dropdown set for West Malaysia
    $("#city, #city2").html(perlis);
  }
  // If East Malaysia selected, show East Malaysia states
  else if (selected == "Kedah") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(kedah);
  } else if (selected == "Pulau Pinang") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(penang);
  } else if (selected == "Perak") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(perak);
  } else if (selected == "Selangor") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(selangor);
  } else if (selected == "Kuala Lumpur") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(kl);
  } else if (selected == "Putrajaya") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(putrajaya);
  } else if (selected == "Labuan") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(labuan);
  } else if (selected == "Kedah") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(kedah);
  } else if (selected == "Negeri Sembilan") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(negeriSembilan);
  } else if (selected == "Melaka") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(melaka);
  } else if (selected == "Johor") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(johor);
  } else if (selected == "Pahang") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(pahang);
  } else if (selected == "Terengganu") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(terengganu);
  } else if (selected == "Kelantan") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(kelantan);
  } else if (selected == "Sabah") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(sabah);
  } else if (selected == "Sarawak") {
    // Show dropdown set for East Malaysia
    $("#city, #city2").html(sarawak);
  }
});

var start_date = null,
  end_date = null;
var timestamp_start_date = null,
  timestamp_end_date = null;
var $input_start_date = null,
  $input_end_date = null;
var dateToday = new Date();

function getDateClass(date, start, end) {
  if (end != null && start != null) {
    if (date > start && date < end) return [true];
  }

  if (date == start) return [true, "start"];
  if (date == end) return [true, "end"];

  return false;
}

function datepicker_draw_nb_nights() {
  var $datepicker = jQuery("#ui-datepicker-div");
  setTimeout(function () {
    if (start_date != null && end_date != null) {
      var $qty_days_stay = jQuery("<div />", {
        class: "ui-datepicker-stay-duration",
      });
      var qty_nights_stay = get_days_difference(
        timestamp_start_date,
        timestamp_end_date
      );
      $qty_days_stay.text(qty_nights_stay + " nights stay");
      $qty_days_stay.appendTo($datepicker);
    }
  });
}

var options_start_date = {
  showAnim: false,
  constrainInput: true,
  numberOfMonths: 1,
  showOtherMonths: true,
  dateFormat: "d MM, yy",
  minDate: dateToday,
  orientation: "bottom right",
  beforeShow: function (input, datepicker) {
    datepicker_draw_nb_nights();
  },
  beforeShowDay: function (date) {
    var timestamp_date = date.getTime();
    var result = getDateClass(
      timestamp_date,
      timestamp_start_date,
      timestamp_end_date
    );
    if (result != false) return result;

    return [true, "", ""];
  },
  onSelect: function (date_string, datepicker) {
    // this => input
    start_date = $input_start_date.datepicker("getDate");
    timestamp_start_date = start_date.getTime();
  },
  onClose: function () {
    if (end_date != null) {
      if (timestamp_start_date >= timestamp_end_date || end_date == null) {
        $input_end_date.datepicker("setDate", null);
        end_date = null;
        timestamp_end_date = null;
        $input_end_date.datepicker("show");
        return;
      }
    }
    if (start_date != null && end_date == null)
      $input_end_date.datepicker("show");
  },
};

var options_end_date = {
  showAnim: false,
  constrainInput: true,
  numberOfMonths: 1,
  showOtherMonths: true,
  dateFormat: "d MM, yy",
  orientation: "bottom right",
  beforeShow: function (input, datepicker) {
    datepicker_draw_nb_nights();
  },
  beforeShowDay: function (date) {
    var timestamp_date = date.getTime();
    var result = getDateClass(
      timestamp_date,
      timestamp_start_date,
      timestamp_end_date
    );
    if (result != false) return result;

    return [true, "", ""];
  },
  onSelect: function (date_string, datepicker) {
    // this => input
    end_date = $input_end_date.datepicker("getDate");
    timestamp_end_date = end_date.getTime();
  },
  onClose: function () {
    if (end_date == null) return;

    if (timestamp_end_date <= timestamp_start_date || start_date == null) {
      $input_start_date.datepicker("setDate", null);
      start_date = null;
      timestamp_start_date = null;
      $input_start_date.datepicker("show");
    }
  },
};

$input_start_date = jQuery("#start-date");
$input_end_date = jQuery("#end-date");

$input_start_date.datepicker(options_start_date);
$input_end_date.datepicker(options_end_date);

function get_days_difference(start_date, end_date) {
  return Math.floor(end_date - start_date) / (1000 * 60 * 60 * 24);
}

$("#hotel-2").hide();

$("[name=radioHotel]").click(function () {
  $(".hotel-choice").hide();
  $("#hotel-" + $(this).val()).show();
});

$("#pickupForm").hide();

$("#pickupAddress").click(function () {
  if ($(this).is(":checked")) {
    $("#pickupForm").show();
  } else {
    $("#pickupForm").hide();
  }
});

$("#dependentGuest").hide();

$("#dependent").click(function () {
  if ($(this).is(":checked")) {
    $("#dependentGuest").show();
  } else {
    $("#dependentGuest").hide();
  }
});

$(function () {
  $("#dob").datepicker({ 
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    yearRange: '-100:+0' 
  });
});

$(document).on("click", ".input-number-increment", function () {
  $(this)
    .prev()
    .val(+$(this).prev().val() + 1);
});

$(document).on("click", ".input-number-decrement", function () {
  if ($(this).next().val() > 0)
    $(this)
      .next()
      .val(+$(this).next().val() - 1);
});
