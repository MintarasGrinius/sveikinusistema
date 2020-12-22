package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Sveikinimas;

@Repository
public interface SveikinmaiRepository extends JpaRepository<Sveikinimas, Long> {

}
