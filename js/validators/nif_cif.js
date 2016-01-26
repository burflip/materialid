/**
 * Handcrafted with ♥ Beebit Solutions
 * Real coffee was used in this project development
 * Licensed under MIT License
 * contacto@beebit.es
 */

function nif_cif(field,settings)
{
    var str = field.val().toString().toUpperCase();
    return (validateNIE(str) || validateDNI(str) || validateCIF(str));
}