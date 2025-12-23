import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-client-login',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './client-login.html',
    styleUrl: './client-login.scss',
})
export class ClientLogin {
    activeTab: 'login' | 'signup' = 'login';

    // Login form
    loginEmail: string = '';
    loginPassword: string = '';
    rememberMe: boolean = false;
    showLoginPassword: boolean = false;

    // Signup form
    signupName: string = '';
    signupEmail: string = '';
    signupPhone: string = '';
    signupCompany: string = '';
    signupPassword: string = '';
    signupConfirmPassword: string = '';
    showSignupPassword: boolean = false;
    agreeToTerms: boolean = false;

    isLoading: boolean = false;

    constructor(private router: Router) { }

    toggleLoginPassword(): void {
        this.showLoginPassword = !this.showLoginPassword;
    }

    toggleSignupPassword(): void {
        this.showSignupPassword = !this.showSignupPassword;
    }

    onLogin(): void {
        if (!this.loginEmail || !this.loginPassword) {
            return;
        }

        this.isLoading = true;

        // Simulate login API call
        setTimeout(() => {
            this.isLoading = false;
            // Navigate to client portal on successful login
            this.router.navigate(['/client-portal']);
        }, 1500);
    }

    onSignup(): void {
        if (!this.signupName || !this.signupEmail || !this.signupPassword || !this.agreeToTerms) {
            return;
        }

        if (this.signupPassword !== this.signupConfirmPassword) {
            alert('Passwords do not match');
            return;
        }

        this.isLoading = true;

        // Simulate signup API call
        setTimeout(() => {
            this.isLoading = false;
            // Switch to login tab after successful signup
            this.activeTab = 'login';
            alert('Account created successfully! Please login.');
        }, 1500);
    }
}
