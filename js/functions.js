'use strict';

function addListItem() {
    let value = $('#input-main').val();
    let listItem = $('<div></div>').addClass('list-item').appendTo($('#wrapper'));
    let textNote = $(`<div>${value}</div>`).addClass('text-note').appendTo(listItem);
    let btnContainer = $('<div></div>').addClass('btn-list-container').appendTo(listItem);
    let doneItem = $('<img src="img/done.png">').attr('class', 'item-done').appendTo(btnContainer);
    let removeItem = $('<img src="img/remove.png">').attr('class', 'item-remove').appendTo(btnContainer);
    $('#input-main').val('');
}

function mainBtnHandler(mainEvent) {
    switch (mainEvent.target.id) {
        case 'add':
            if ($('#input-main').val()) {
                if ($('.displayed')) {
                    $('.error').removeClass('displayed');
                }
                addListItem();
            } else {
                $('.error').addClass('displayed');
            }
            break;
        case 'hide':
            itemHideShow();
            break;
    }
}

function itemEventHandler(itemEvent) {
    switch (itemEvent.target.className) {
        case 'item-done':
            itemDone(itemEvent);
            break;
        case 'item-remove':
            itemRemove(itemEvent);
            break;
    }
}

function itemDone(itemEvent) {
    $(itemEvent.currentTarget).toggleClass('finished');
    if (!$(itemEvent.currentTarget).hasClass('finished')) {
        $(itemEvent.target).attr('src', 'img/done.png');
        $(itemEvent.target.nextElementSibling).attr('src', 'img/remove.png');
        itemEvent.stopPropagation();
    } else {
        $(itemEvent.target).attr('src', 'img/clock.png');
        $(itemEvent.target.nextElementSibling).attr('src', 'img/remove_grey.png');
        itemEvent.stopPropagation();
    }
}

function itemRemove(itemEvent) {
    itemEvent.currentTarget.remove();
}

function itemHideShow() {
    $('#wrapper').toggleClass('hidden');
    if (!$('#wrapper').hasClass('hidden')) {
        $('#hide').attr('src', 'img/crossed.png');
    } else {
        $('#hide').attr('src', 'img/eye.png');
    }
}