package com.tsmurer.calcme.services;

import com.tsmurer.calcme.models.Person;

import java.util.List;

public interface PersonService {
    public List<Person> getAll();
    public Person getById(String id);
    public Person createPerson(Person person);
}
