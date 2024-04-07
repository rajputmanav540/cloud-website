<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Get the login form
        const loginForm = document.getElementById('login-form');

        // Add event listener to the form submit event
        loginForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Show the customize button
            document.getElementById('customize-button').style.display = 'block';
        });
    });
</script>
