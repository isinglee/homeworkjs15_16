/*jslint browser: true*/
/*global $, jQuery, escape, console, tmpl */
$(function() {
    'use strict';
    $('form').submit(function(e) {
        var API_key = '2677792-fb45a0b5e6baefa2301258208',
            searchQuery = escape($('.query').val()),
            URL = 'https://pixabay.com/api/?key=' + API_key + '&q=' + searchQuery + '&image_type=photo&pretty=true';
        $.ajax({
            method: 'get',
            url: URL,
            dataType: 'jsonp',
            crossDomain: true,
            success: function searchResult(data) {
                //console.log(data);
                var html = tmpl('result_template', data);
                $('.content_search').html(html);
                $('.resultStats').html('Результатов: ' + data.hits.length + ' из ' + data.total);
                if (data.total > 0) {
                    $('.resultStats.bottom').show();
                } else {
                    $('.resultStats.bottom').hide();
                }
            }
        });
        e.preventDefault();
    });
});

// Классы и наследование
function Human(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

var human = new Human('Вася', 36, 'M', 180, 85);

function Worker(workplace, salary) {
    this.workplace = workplace;
    this.salary = salary;
    this.work = function() {
        console.log(this.name + ' говорит: "Привет, меня зовут ' + this.name + ', мне ' + this.age + '. Я вешу ' + this.weight + ' кг при росте ' + this.height + '. Я иду на работу."');
    }
}
Worker.prototype = human;

function Student(study_place, scholarship) {
    this.study_place = study_place;
    this.scholarship = scholarship;
    this.watchMovies = function() {
        console.log(this.name + ' говорит: "Привет, меня зовут ' + this.name + ', мне ' + this.age + '. Я вешу ' + this.weight + ' кг при росте ' + this.height + '. Я иду домой смотреть сериалы!"');
    }
}
Student.prototype = human;

var worker = new Worker('Library', 3000);
console.log(worker);
worker.work();

var student = new Student('University', 750);
console.log(student);
student.watchMovies();
