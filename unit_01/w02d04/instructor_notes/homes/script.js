$(function() {
  $('table#homes').on('click', 'tr', function() {
    $(this).fadeOut(1000, function() {
      this.remove();
    })
  })
  $('button#addHomes').on('click', function() { // IMPORTANT
    var homes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
    ];
    homes.forEach(function(home) {
      var newRow = $('<tr>');

      newRow.append(`<td>${home.address}</td>`);
      newRow.append(`<td>${home.sf}</td>`);
      newRow.append(`<td>${home.bedrooms}</td>`);
      newRow.append(`<td>${home.baths}</td>`);
      newRow.append(`<td>${home.price}</td>`);
      newRow.append(`<td><button class="btn btn-xs btn-danger">Remove</button></td>`);

      $('tbody').append(newRow);
    })
  })
})
