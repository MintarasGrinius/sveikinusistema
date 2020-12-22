package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Sveikinimas;
import net.javaguides.springboot.repository.SveikinmaiRepository;

//@CrossOrigin(origins = "http://localhost:3000")

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.HEAD, RequestMethod.OPTIONS, RequestMethod.PATCH, RequestMethod.POST, RequestMethod.PUT, RequestMethod.TRACE})
@RequestMapping("/api/")
public class SveikinmaiController {
	
	@Autowired
	private SveikinmaiRepository sveikinmaiRepository;
	
	@CrossOrigin(methods = RequestMethod.GET)
	@GetMapping("/sveikinimai")
	public List<Sveikinimas> getAllSveikinmai(){
		return sveikinmaiRepository.findAll();
	}

	@CrossOrigin(methods = RequestMethod.POST)
	@PostMapping("/sveikinimai")
	public Sveikinimas createSveikinmas(@RequestBody Sveikinimas sveikinimas) {
		return sveikinmaiRepository.save(sveikinimas);
	}
	
	@CrossOrigin(methods = RequestMethod.GET)
	@GetMapping("sveikinimai/{id}")
	public ResponseEntity<Sveikinimas> getSveikinmasById(@PathVariable Long id) {
		Sveikinimas sveikinimas = sveikinmaiRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Sveikinimas not exist with id: " + id));
		return ResponseEntity.ok(sveikinimas);
	}
	
	@CrossOrigin(methods = RequestMethod.PUT)
	@PutMapping("sveikinimai/{id}")
	public ResponseEntity<Sveikinimas> updateSveikinmas(@PathVariable Long id, @RequestBody Sveikinimas sveikinimasDetails){
		Sveikinimas sveikinimas = sveikinmaiRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Sveikinimas not exist with id: " + id));
		sveikinimas.setPaveiksliukas(sveikinimasDetails.getPaveiksliukas());
		sveikinimas.setTekstas(sveikinimasDetails.getTekstas());
		sveikinimas.setAudio(sveikinimasDetails.getAudio());
		sveikinimas.setVardas(sveikinimasDetails.getVardas());
		
		Sveikinimas updatedsveikinimas = sveikinmaiRepository.save(sveikinimas);
		
		return ResponseEntity.ok(updatedsveikinimas);
	}
	
	@CrossOrigin(methods = RequestMethod.DELETE)
	@DeleteMapping("/sveikinimai/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteSveikinmas(@PathVariable Long id){
		Sveikinimas sveikinimas = sveikinmaiRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Sveikinimas not exist with id: " + id));

		sveikinmaiRepository.delete(sveikinimas);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
