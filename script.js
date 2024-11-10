function generatePDF() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    let resumeContent = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    const resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = resumeContent;
    resumePreview.style.display = "block";

    // Use jsPDF library to download as PDF
    const pdf = new jsPDF();
    pdf.fromHTML(resumePreview, 10, 10);
    pdf.save(`${name}-resume.pdf`);
}
