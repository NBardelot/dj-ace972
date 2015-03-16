function setCopyright() {
    var year = moment().year();
    $(".ace972-copyright").text("© " + year + " DJ ace972");
    $(".sensationalfix-copyright").text("Icônes de réseaux sociaux par SensationalFix, license CC-by-SA");
}

function sendEmail() {
    var subject = encodeURIComponent($("#devis-email-subject").val());
    var body = encodeURIComponent($("#devis-email-body").val());
    $(location).attr("href", "mailto:theoneace972@gmail.com?subject=" + subject + "&body=" + body);
}

function cancel() {
    $("#formulaire-devis-1").hide();
    $("#formulaire-devis-2").hide();
    $("#formulaire-devis-3").hide();
    $("#dj-ace972-cover").show();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function openForm() {
    $("#dj-ace972-cover").hide();
    $("#formulaire-devis-1").show();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function step1to2() {
    $("#formulaire-devis-1").hide();
    $("#formulaire-devis-2").show();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function step2to3() {
    $("#devis-email-subject").val(formatSubjectFromForm());
    $("#devis-email-body").val(formatBodyFromForm());
    $("#formulaire-devis-2").hide();
    $("#formulaire-devis-3").show();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function step2to1() {
    $("#formulaire-devis-2").hide();
    $("#formulaire-devis-1").modal('show');
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function step3to2() {
    $("#formulaire-devis-3").hide();
    $("#formulaire-devis-2").show();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function formatSubjectFromForm() {
    var contact = $("#devis-contact").val();
    return "Demande de devis pour " + contact;
}

function formatBodyFromForm() {
    var contact = $("#devis-contact").val();
    var telephone = $("#devis-telephone").val();
    var email = $("#devis-email").val();
    var date = $("#devis-date").val();
    var typeEvenement = $("#devis-type-evenement").val();
    var ville = $("#devis-ville").val();
    var adresse = $("#devis-adresse").val();
    var surface = $("#devis-surface").val();
    var commentaires = $("#devis-commentaires").val();

    var body = "Bonjour,\n" +
        "\n" +
        "Je souhaite s'il vous plaît obtenir un devis pour la préstation suivante :\n" +
        "\n" +
        typeEvenement + " sur une surface de " + surface + " m², le " + date + " à " + ville + " à l'adresse suivante :\n" +
        adresse + "\n" +
        "\n" +
        "Pour me contacter :\n" +
        "- tél. : " + telephone + "\n" +
        "- email : " + email + "\n" +
        "\n" +
        commentaires + "\n" +
        "\n" +
        contact;
    return body;
}

function main() {
    setCopyright();

    $(".button-annuler").click(cancel);
    $(".lancer-formulaire-devis").click(openForm);
    $("#button-etape1-vers-etape2").click(step1to2);
    $("#button-etape2-vers-etape3").click(step2to3);
    $("#button-etape2-vers-etape1").click(step2to1);
    $("#button-envoyer-demande").click(sendEmail);
    $("#button-etape3-vers-etape2").click(step3to2);
}

$(document).ready(main);