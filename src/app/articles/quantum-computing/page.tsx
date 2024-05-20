import Image from "next/image";

const QuantumComputing = () => {
  return (
    <div className="article-container p-6 rounded-lg shadow-lg ml-40 mr-40">
      <h1 className="text-3xl font-bold mb-4 text-center">Quantum Computing</h1>
      <p className="mb-6">
        Quantum Computing can be simply defined as “Use of quantum effects to
        store and compute data”. Quantum computing is emerging as a gamechanger
        in today’s computer industry.
      </p>
      <p className="mb-6">
        But what is the need of quantum computing? Today we use semiconductor
        technology for computers. By increasing the number of transistors in a
        given area we are increasing the capacity of data storage. But we can’t
        keep on reducing the size of transistors. There is a limit to it. The
        advantages of small size are - a) Less heat generation, b) Less inertia,
        c) More capacity in a given area.
      </p>
      <Image
        src="/quantum-2.avif"
        alt="Quantum Computing"
        width={800}
        height={600}
        className="mb-4 rounded-lg mx-auto"
      />
      <p className="mb-6">
        If we are able to store 1 bit using the size of an atom or even less
        than that, we can achieve the above-mentioned advantages. But at this
        size, quantum effects like quantum entanglement and superposition come
        into the picture. What if we can utilize this quantum phenomenon to
        store the bit? Quantum computing does exactly that. This bit is called a
        qubit in the quantum computing world.
      </p>
      <p className="mb-6">
        Qubit is the centre of attraction of quantum computing. As the number of
        coherent yet completely isolated qubits rise, the capacity of a quantum
        computer increases. But implementing a large number of qubits together
        makes it difficult to achieve coherence.
      </p>
      <p className="mb-6">
        Qubits can be encoded using quantum phenomena. There are 4 types of
        qubits depending on the phenomenon used to create them. Those are spin
        qubits, NV centre qubits, superconducting qubits, and topological
        qubits. Each has its advantages and disadvantages.
      </p>
      <p className="mb-6">
        In classical computing, some problems are believed to be intractable.
        Using quantum algorithms for the same problems makes them tractable. The
        meaning of intractability of a problem is “The problem can be solved but
        it can take decades or even time equal to the age of the universe to
        solve the problem using a classical computer. A quantum computer is
        essentially a quantum accelerator. It speeds up the tasks of a classical
        computer. As we use FPGA and/or GPU with a classical CPU, we can use a
        quantum accelerator chip with a classical CPU. Some tasks which cannot
        be done instantly on a CPU can be executed instantly on a quantum
        accelerator. The CPU can perform its usual tasks and only such
        intractable problems can be handed over to the quantum accelerator.
      </p>
      <p className="mb-6">
        An example of such a problem is “factoring” which is used by RSA (RSA:
        Rivest–Shamir–Adleman is one of the first public-key cryptosystems and
        is widely used for secure data transmission) as it is believed to be
        intractable. But using Shor’s quantum algorithm this problem becomes
        tractable. As RSA is used by many networking protocols for security, all
        these protocols will become insecure if this algorithm is implemented
        easily and economically.
      </p>
      <p className="mb-6">
        As the field of quantum computing is still in its infancy, there is very
        little research in this area which has led to fewer patents. As
        developing a quantum computer is expensive, access to this technology is
        limited to billion-dollar companies like Google. Google has many patents
        in this area. E.g. “Chips including classical and quantum computing
        processors”. Google has also developed its own quantum computer.
      </p>
      <Image
        src="/quantum.png"
        alt="Quantum Computing"
        width={500}
        height={400}
        className="mb-4 rounded-lg mx-auto"
      />
      <p className="mb-6">
        One of the many fields in quantum computing in which there is a huge
        possibility for patents is quantum cryptography. Classical cryptography
        uses intractable problems to provide data encryption services. Using
        quantum algorithms, many of these problems become tractable and
        classical cryptography becomes insecure. The need for Quantum
        Cryptography arises from this problem. Quantum cryptography can
        re-establish the security which was previously provided by classical
        cryptography. One such patent by Hewlett Packard Enterprise Development
        LP in 2004 describes “A method of establishing a shared secret random
        cryptographic key between a sender and a recipient using a quantum
        communications channel“. BT Group, a British multinational
        telecommunications company, United Kingdom, has filed over 100 patents
        in quantum cryptography.
      </p>
      <p className="mb-6">
        Quantum algorithms can be developed using a mathematical model of
        quantum computing, which eliminates the need for actual hardware for
        quantum computng research. Patents can be acquired for quantum
        algorithms based on mathematical models, bypassing the need for
        extremely expensive quantum hardware. The mathematical model of quantum
        computing uses a) Linear Algebra - Specifically vector space, b) Hilbert
        space, c) Classical computing Mathematical model abstracts the quantum
        effects which makes it easy to create and prove quantum algorithms.
      </p>
      <Image
        src="/quantum-1.png"
        alt="Quantum Computing"
        width={500}
        height={400}
        className="mb-4 rounded-lg mx-auto"
      />
      <p className="mb-6">
        In 2018, China had nearly twice as many patent filings as the United
        States for quantum technology overall, a category that includes
        communications and cryptology devices. The US, though, leads the world
        in patents relating to the most prized segment of the field -quantum
        computers- thanks to heavy investment by IBM, Google, Microsoft, and
        others. Most of the patents pertain to the physical platforms used to
        implement the qubit, such as superconducting circuits, semiconductor
        materials, ion traps, quantum dots, color centers in diamond,
        topological devices. However, there is a huge scope of research in
        quantum cryptography and mathematical models and quantum algorithms in
        quantum computing which does not require a million-dollar hardware.
      </p>
      <p className="mb-6">
        Most of the patents pertain to the physical platforms used to implement
        the qubit, such as superconducting circuits, semiconductor materials,
        ion traps, quantum dots, color centers in diamond, topological devices.
        However, there is a huge scope of research in quantum cryptography and
        mathematical models and quantum algorithms in quantum computing which
        does not require a million-dollar hardware
      </p>
    </div>
  );
};

export default QuantumComputing;
