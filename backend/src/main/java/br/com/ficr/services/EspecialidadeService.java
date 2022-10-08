package br.com.ficr.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.ficr.entities.Especialidade;
import br.com.ficr.exceptions.AlreadyExistsException;
import br.com.ficr.exceptions.ResourceNotFoundException;
import br.com.ficr.repositories.EspecialidadeRepository;

@Service
@Transactional
public class EspecialidadeService {

    @Autowired
    private EspecialidadeRepository especialidadeRepository;

    public Especialidade create(Especialidade obj) {
        Optional<Especialidade> especialidadesCadastrada = especialidadeRepository.findByNomeIgnoreCase(obj.getNome());
        if (especialidadesCadastrada.isPresent()) {
            throw new AlreadyExistsException("Especialidade já cadastrada: " + obj.getNome());
        }
        return especialidadeRepository.save(obj);
    }

    @Transactional(readOnly = true)
    public List<Especialidade> findAll() {
        return especialidadeRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Especialidade> findAllByNome(String nome) {
        return especialidadeRepository.findByNomeContainingIgnoreCase(nome);
    }

    @Transactional(readOnly = true)
    public Especialidade findById(Long id) {
        Optional<Especialidade> optional = especialidadeRepository.findById(id);
        if (optional.isEmpty()) {
            throw new ResourceNotFoundException("Especialidade não encontrada: " + id);
        }
        return optional.get();
    }

    public Especialidade update(Especialidade obj, Long id) {
        Especialidade especialidadeCadastrada = this.findById(id);
        obj.setId(especialidadeCadastrada.getId());
        validUpdate(obj);
        especialidadeCadastrada.setNome(obj.getNome());
        return especialidadeCadastrada;
    }

    @Transactional(readOnly = true)
    public void validUpdate(Especialidade obj) {
        Optional<Especialidade> especialidadeCadastrada = especialidadeRepository.findByNomeIgnoreCase(obj.getNome());
        if (especialidadeCadastrada.isPresent() && obj.getId() != especialidadeCadastrada.get().getId()) {
            throw new AlreadyExistsException("Especialidade já cadastrada: " + obj.getNome());
        }
    }

    public void delete(Long id) {
        Especialidade especialidadeCadastrada = this.findById(id);
        especialidadeRepository.delete(especialidadeCadastrada);
    }

}
