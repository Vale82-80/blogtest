/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

// Bootstrap 5.0.0-beta1 JS : ( @popperjs/core + bootstrap )
import { popperjs } from '@popperjs/core';
import { bootstrap } from 'bootstrap';
import './scripts';
