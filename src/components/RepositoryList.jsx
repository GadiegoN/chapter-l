import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/GadiegoN/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []); // Cuidado para não deixar sem o 2° parametro

    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                } )}
            </ul>
        </section>
    );
}