CREATE TABLE IF NOT EXISTS Patients (
    PatientID       BIGSERIAL PRIMARY KEY,
    PatientName     VARCHAR(255) NOT NULL,
    DOB             DATE NOT NULL,
    Gender          VARCHAR(20) NOT NULL,
    Address         VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Doctors (
    DoctorID        BIGSERIAL PRIMARY KEY,
    PatientName     VARCHAR(255) NOT NULL,
    PhoneNumber     VARCHAR(50) NOT NULL,
    Department      VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Appointments (
    AppointmentID   BIGSERIAL PRIMARY KEY,
    PatientID       BIGINT NOT NULL,
    DoctorID        BIGINT NOT NULL,
    ApptTime        TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    ApptDate        DATE NOT NULL,
    Status          VARCHAR(50) NOT NULL,

    CONSTRAINT fk_appointments_patient
        FOREIGN KEY (PatientID)
        REFERENCES Patients(PatientID),

    CONSTRAINT fk_appointments_doctor
        FOREIGN KEY (DoctorID)
        REFERENCES Doctors(DoctorID)
);

CREATE TABLE Prescriptions (
    PrescriptionID      BIGSERIAL PRIMARY KEY,
    AppointmentID       BIGINT NOT NULL,
    PrescriptionDate    DATE NOT NULL,
    IssuedByDoctorID    BIGINT NOT NULL,

    CONSTRAINT fk_prescriptions_appointment
        FOREIGN KEY (AppointmentID) REFERENCES Appointments(AppointmentID),

    CONSTRAINT fk_prescriptions_doctor
        FOREIGN KEY (IssuedByDoctorID) REFERENCES Doctors(DoctorID)
);

CREATE TABLE IF NOT EXISTS MedicalRecords (
    PatientID       BIGINT PRIMARY KEY,
    DoctorID        BIGINT NOT NULL,
    PrescriptionID  BIGINT NOT NULL,
    VisitDate       DATE NOT NULL,

    CONSTRAINT fk_records_patient
        FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),

    CONSTRAINT fk_records_doctor
        FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),

    CONSTRAINT fk_records_prescription
        FOREIGN KEY (PrescriptionID) REFERENCES Prescriptions(PrescriptionID)
);
