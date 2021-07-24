package com.tsmurer.calcme.services;

import com.tsmurer.calcme.errors.ValidationException;
import com.tsmurer.calcme.models.Person;
import com.tsmurer.calcme.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{

    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<Person> getAll() {
        return this.personRepository.findAll();
    }

    @Override
    public Person getById(String id) {
        return null;
    }

    @Override
    public Person createPerson(Person person) {
        Person duplicatedData = personRepository.findPersonByEmail(person.getEmail());
        if(duplicatedData != null) {
            throw new ValidationException("EXISTINGEMAIL");
        }
        duplicatedData = personRepository.findPersonByPhone(person.getPhone());

        if(duplicatedData != null) {
            throw new ValidationException("EXISTINGPHONE");
        }
        return this.personRepository.save(person);
    }

}
