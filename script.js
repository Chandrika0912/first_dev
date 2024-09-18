$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        $('.error').text('');
        
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var age =$('age').val();
        var gender =$('gender').val();
        var PhoneNumber=$('phone number').val();
    
        if (name.trim() === '') {
            $('#nameError').text('Name is required.');
            hasError = true;
        }

        // Validate email
        if (email.trim() === '') {
            $('#emailError').text('Email is required.');
            hasError = true;
        } else if (!validateEmail(email)) {
            $('#emailError').text('Invalid email format.');
            hasError = true;
        }

        // Validate password
        if (password.trim() === '') {
            $('#passwordError').text('Password is required.');
            hasError = true;
        }
        if(age.trim()===''){

            $('#ageError').text('age is required.');
        }
        if(Gender.trim()===''){

            $('#genderError').text('gender is required.');
        }
        if(PhoneNumber.trim()===''){
            $('#phonenumberError').text('PhoneNumber is required.');
        }
      
        });
    });
