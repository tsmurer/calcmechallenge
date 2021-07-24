package com.tsmurer.calcme.repository;

import com.tsmurer.calcme.models.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface PersonRepository extends MongoRepository<Person, String> {
    @Query("{ 'phone': ?0 }")
    Person findPersonByPhone(String phone);

    @Query("{ 'email': ?0 }")
    Person findPersonByEmail(String email);
}
