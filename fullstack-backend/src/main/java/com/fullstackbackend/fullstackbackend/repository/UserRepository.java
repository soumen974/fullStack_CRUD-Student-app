package com.fullstackbackend.fullstackbackend.repository;

import com.fullstackbackend.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
