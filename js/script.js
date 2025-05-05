// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: May 2025
// This file contains the JS functions for index.html
document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const ageInput = document.getElementById("age");
    const result = document.getElementById("result");
    const ageStr = ageInput.value.trim();

    // Check for empty input
    if (ageStr === "") {
        result.textContent = "Please input your age.";
        return;
    }

    const age = Number(ageStr);

    // Validate if input is a valid integer
    if (!Number.isInteger(age)) {
        result.textContent = "Decimal ages are not allowed.";
        return;
    }

    // Check for negative age
    if (age < 0) {
        result.textContent = "Negative ages are not allowed.";
        return;
    }

    // Determine movie eligibility
    if (age >= 17) {
        result.textContent = "You can go to an R-rated, PG-13, PG, or G movie alone.";
    } else if (age >= 13) {
        result.textContent = "You can go to a PG-13, PG, or G movie alone.";
    } else if (age >= 7) {
        result.textContent = "You can go to a G or PG movie alone.";
    } else {
        result.textContent = "You cannot go to a movie alone.";
    }
});