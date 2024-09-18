document.addEventListener('DOMContentLoaded', function() {
    // Button event handler for logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        // Replace this with actual logout functionality
        alert('You have been logged out.');
      });
    }
    // Button event handlers for other actions
    document.getElementById('btnusercreation').addEventListener('click', function() {
      alert('User creation button clicked.');
    });
    document.getElementById('btnareacreation').addEventListener('click', function() {
      alert('Area creation button clicked.');
    });
    document.getElementById('btncustomtables').addEventListener('click', function() {
      alert('Custom Tables button clicked.');
    });
    document.getElementById('btnsqlquery').addEventListener('click', function() {
      alert('SQL Query button clicked.');
    });
    document.getElementById('btnmobileappversions').addEventListener('click', function() {
      alert('Mobile App Versions button clicked.');
    });
    // Form validation
    const form = document.querySelector('.accordion-body');
    if (form) {
      const clearBtn = document.querySelector('button.btn-secondary');
      const submitBtn = document.querySelector('button.btn-primary');
      // Clear button handler
      if (clearBtn) {
        clearBtn.addEventListener('click', function() {
          form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="number"], select').forEach(field => {
            field.value = '';
          });
        });
      }
      // Submit button handler with basic validation
      if (submitBtn) {
        submitBtn.addEventListener('click', function() {
          const requiredFields = form.querySelectorAll('input[required], select[required]');
          let isValid = true;
  
          requiredFields.forEach(field => {
            if (!field.value) {
              isValid = false;
              alert(`Please fill out the ${field.previousElementSibling.innerText}`);
              return;
            }
          });
          if (isValid) {
            alert('Form submitted successfully!');
            // Replace this with actual form submission logic
          }
        });
      }
    }
    // Accordion control (if needed)
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
      });
    });
  });
  $('#btnSubmit1').on('click', function(event) {
    event.preventDefault();
    const userId = $('#name1').val();
const userName = $('#User Name1').val();
const roleName = $('select').eq(4).val();
const companyCode = $('select').eq(5).val();
const division = $('select').eq(6).val();
const subDivision = $('select').eq(7).val();
const password = $('#password1').val();
const email = $('#Email1').val();
const phoneNumber = $('#Number1').val();
const address = $('#text1').val();
console.log('User ID:', userId);
console.log('User Name:', userName);
console.log('Role Name:', roleName);
console.log('Company Code:', companyCode);
console.log('Division:', division);
console.log('Sub Division:', subDivision);
console.log('Password:', password);
console.log('Email:', email);
console.log('Phone Number:', phoneNumber);
console.log('Address:', address);
});


$('#btnSubmit').on('click', function(event) {
  event.preventDefault();
  const userId = $('#name').val();
const userName = $('#User Name').val();
const roleName = $('select').eq(0).val();
const companyCode = $('select').eq(1).val();
const division = $('select').eq(2).val();
const subDivision = $('select').eq(3).val();
const password = $('#password').val();
const email = $('#Email').val();
const phoneNumber = $('#Number').val();
const address = $('#text').val();
console.log('User ID:', userId);
console.log('User Name:', userName);
console.log('Role Name:', roleName);
console.log('Company Code:', companyCode);
console.log('Division:', division);
console.log('Sub Division:', subDivision);
console.log('Password:', password);
console.log('Email:', email);
console.log('Phone Number:', phoneNumber);
console.log('Address:', address);
});







$(document).ready(function() {
  var dataArrObj = [
      // Your data here
  ];

  function populateTable() {
      var $tbody = $('#data-table tbody');
      $tbody.empty(); // Clear existing rows

      dataArrObj.forEach(function(item, index) {
          var row = '<tr data-index="' + index + '">' +
                      '<td>' + item.userID + '</td>' +
                      '<td>' + item.userName + '</td>' +
                      '<td>' + item.roleName + '</td>' +
                      '<td>' + item.companyCode + '</td>' +
                      '<td>' + item.division + '</td>' +
                      '<td>' + item.subDivision + '</td>' +
                      '<td>' + item.email + '</td>' +
                      '<td>' + item.phoneNumber + '</td>' +
                      '<td>' + item.address + '</td>' +
                      '<td><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>' +
                    '</tr>';
          $tbody.append(row);
      });
  }

  function showEditForm(index) {
      var item = dataArrObj[index];
      $('#edit-index').val(index);
      $('#edit-userID').val(item.userID);
      $('#edit-userName').val(item.userName);
      $('#edit-roleName').val(item.roleName);
      $('#edit-companyCode').val(item.companyCode);
      $('#edit-division').val(item.division);
      $('#edit-subDivision').val(item.subDivision);
      $('#edit-email').val(item.email);
      $('#edit-phoneNumber').val(item.phoneNumber);
      $('#edit-address').val(item.address);
      $('#edit-form').show();
  }

  function hideEditForm() {
      $('#edit-form').hide();
  }

  function updateRow(index, updatedItem) {
      dataArrObj[index] = updatedItem;
      populateTable();
  }

  $('#data-table').on('click', '.edit-btn', function() {
      var index = $(this).closest('tr').data('index');
      showEditForm(index);
  });

  $('#data-table').on('click', '.delete-btn', function() {
      var index = $(this).closest('tr').data('index');
      if (confirm('Are you sure you want to delete this item?')) {
          dataArrObj.splice(index, 1);
          populateTable();
      }
  });

  $('#form-edit').on('submit', function(event) {
      event.preventDefault();
      var index = $('#edit-index').val();
      var updatedItem = {
          userID: $('#edit-userID').val(),
          userName: $('#edit-userName').val(),
          roleName: $('#edit-roleName').val(),
          companyCode: $('#edit-companyCode').val(),
          division: $('#edit-division').val(),
          subDivision: $('#edit-subDivision').val(),
          email: $('#edit-email').val(),
          phoneNumber: $('#edit-phoneNumber').val(),
          address: $('#edit-address').val()
      };
      updateRow(index, updatedItem);
      hideEditForm();
  });

  $('#cancel-edit').on('click', function() {
      hideEditForm();
  });

  populateTable();
});


