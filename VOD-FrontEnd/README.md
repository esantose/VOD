# Set configurations 
Update: .editorconfig
configuration, see http://editorconfig.org

Update: 
angular.json
tsconfig.json

# Set Up Angular Material Library

ng add @angular/material
npm i @fortawesome/fontawesome-free
ng g m share/material --flat=true


# Set Up Layouts Module and Routings
ng g m shared/dashboard --routing
ng g c shared/dashboard/layout
ng g c shared/dashboard/header
ng g c shared/dashboard/footer
ng g c shared/dashboard/sidebar
ng g c shared/dashboard/breadcrumb

# Set Up Authentication
ng g m auth --routing
ng g c auth\login
ng g c auth\register
ng g c auth\reset-password
ng g c auth\two-factors


