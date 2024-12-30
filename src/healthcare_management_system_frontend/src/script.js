document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');
    const contactForm = document.getElementById('contact-form');
    const medicalHistoryList = document.querySelector('.medical-history ul');
    const prescriptionList = document.querySelector('.prescription-list');

    // Function to handle appointment booking
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const reason = document.getElementById('reason').value.trim();

        if (!date || !time || !reason) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate booking an appointment (this would be replaced with actual blockchain interaction)
        const appointment = {
            date: date,
            time: time,
            reason: reason
        };

        // Display the appointment in the medical history
        displayMedicalHistory(appointment);

        // Reset the form
        appointmentForm.reset();
    });

    // Function to handle contact form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate sending a message (this would be replaced with actual email sending logic)
        alert('Message sent successfully!');

        // Reset the form
        contactForm.reset();
    });

    // Function to display medical history
    function displayMedicalHistory(appointment) {
        const medicalHistoryItem = document.createElement('li');
        medicalHistoryItem.innerHTML = `<strong>${appointment.date}:</strong> ${appointment.reason} (Time: ${appointment.time})`;
        medicalHistoryList.appendChild(medicalHistoryItem);
    }

    // Function to display prescriptions
    function displayPrescription(prescription) {
        const prescriptionItem = document.createElement('div');
        prescriptionItem.className = 'prescription-item';
        prescriptionItem.innerHTML = `
            <p><strong>Medication:</strong> ${prescription.medication}</p>
            <p><strong>Dosage:</strong> ${prescription.dosage}</p>
            <p><strong>Frequency:</strong> ${prescription.frequency}</p>
        `;
        prescriptionList.appendChild(prescriptionItem);
    }

    // Simulate loading existing medical history and prescriptions
    const existingMedicalHistory = [
        { date: '2023-01-01', reason: 'Flu', time: '10:00 AM' },
        { date: '2022-12-15', reason: 'Allergic Reaction', time: '02:00 PM' }
    ];

    const existingPrescriptions = [
        { medication: 'Amoxicillin', dosage: '500 mg', frequency: 'Twice a day' },
        { medication: 'Ibuprofen', dosage: '400 mg', frequency: 'As needed' }
    ];

    existingMedicalHistory.forEach(history => displayMedicalHistory(history));
    existingPrescriptions.forEach(prescription => displayPrescription(prescription));
});
