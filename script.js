document.getElementById("cvForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const resumo = document.getElementById("resumo").value;
    const experiencia = document.getElementById("experiencia").value;
    const formacao = document.getElementById("formacao").value;

    doc.setFontSize(20);
    doc.text(nome, 10, 20);

    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 10, 30);

    doc.text("Resumo Profissional:", 10, 50);
    doc.text(resumo, 10, 60);

    doc.text("Experiência:", 10, 90);
    doc.text(experiencia, 10, 100);

    doc.text("Formação:", 10, 130);
    doc.text(formacao, 10, 140);

    doc.save(`${nome}_curriculo.pdf`);
});
