package com.tsmurer.calcme.controllers;


import com.tsmurer.calcme.errors.ValidationException;
import com.tsmurer.calcme.models.Person;
import com.tsmurer.calcme.services.PersonService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @CrossOrigin
    @GetMapping
    public List<Person> getAll() {
        return this.personService.getAll();
    }
    @CrossOrigin
    @PostMapping
    public ResponseEntity<Object> createPerson(@RequestBody Person person) {
        try {
            this.personService.createPerson(person);
            return new ResponseEntity<>("{" +
                    "\"Status\":\"OK\"," +
                    "\"name\":\"" + person.getName() + "\"," +
                    "\"email\":\"" + person.getEmail() + "\"," +
                    "\"phone\":\"" + person.getPhone() + "\"}", HttpStatus.OK);
        } catch(ValidationException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }

    }
}
