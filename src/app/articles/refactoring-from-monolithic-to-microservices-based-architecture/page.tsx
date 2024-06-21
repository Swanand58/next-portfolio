"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

const MonolithicToMicroservicesBasedArchitecture = () => {
  const router = useRouter();
  return (
    <div className="article-container p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-justify">
      <button
        onClick={() => router.back()}
        className="text-blue-500 hover:text-blue-700 mb-4"
      >
        ← Back
      </button>
      <p className="mb-6 font-semibold text-center text-sm">
        Published - 1 April 2022
      </p>{" "}
      <h1 className="text-3xl font-bold mb-6 text-center">
        <Typewriter
          words={[
            "Refactoring from Monolithic to Microservices based Architecture. (Challenges and Solution)",
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <h2 className="mb-2 text-xl font-semibold"> Monolithic Architecture</h2>
      <p className="mb-6">
        A monolithic architecture-based application is typically a system in
        which all the modules are packaged together as a single deployable unit
        of execution. A monolithic application typically has a layered design,
        with separate layers for UI, Business Logic, and Database. For example,
        a client-side UI (desktop or web-based), a server-side application, and
        data access. The server-side application receives requests, executes
        domain logic, retrieves and updates data from the database, and responds
        back to the client. This server-side application is based on the
        monolithic architecture. Any changes to the system involve building and
        deploying a new version of the server-side application.
      </p>
      <p className="mb-6">
        Over time, the monolith grows larger as new changes and functionality
        are added according to business requirements. Modularity within the
        application is based on the features of the language it is written in
        (packages, modules, etc.). As more and more changes are made and new
        functionalities are added, it becomes more difficult to maintain a good
        modular structure. Even a small change requires the entire monolith to
        be rebuilt and deployed. The target number of production deployments and
        the goal of releasing faster and breaking less becomes difficult to
        achieve. A monolithic application can begin to suffer from the following
        problems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2 mb-2">
        <li>
          Individual parts of the system are tightly coupled, so they cannot be
          scaled independently.
        </li>
        <li>
          It is hard to maintain the code due to tight coupling and hidden
          dependencies.
        </li>
        <li>
          Testing becomes harder, increasing the probability of introducing
          vulnerabilities.
        </li>
      </ul>
      <p className="mb-6">
        At this point, it makes sense to migrate the application to a
        microservices architecture.
      </p>
      <Image
        src="/monolithic1.webp"
        alt="Monolith"
        width={400}
        height={500}
        className="mb-4 rounded-lg mx-auto"
      />
      <div className="text-sm text-gray-500 text-center mb-2">
        Image credits: [Camunda]
      </div>
      <h2 className="mb-2 text-xl font-semibold">
        Microservices Architecture:
      </h2>
      <p className="mb-6">
        Unlike monoliths, microservices are loosely coupled units of execution.
        It promotes breaking down a big monolithic application into smaller and
        simpler services to be built and deployed independently. Well, it's
        "micro," so it's simple to understand, and the developers can focus on
        just that functionality that they want to release into production. When
        it is ready, developers can just test and deploy that service. There is
        no need to bundle it with the rest of the application, and no waiting
        for a release window. Over time, development cycles become faster as
        features can be released quicker. Testing becomes more coherent and
        consistent.
      </p>
      <p className="mb-6">
        If the service is creating bottlenecks when demand spikes, scale out by
        developing a few more instances of just that microservice. If the
        service is causing exceptions and production issues, removing it
        completely will not affect the rest of the application. Thus, a single
        service that fails will not bring down the entire application. This is
        an architecture that embraces agile and DevOps practices. The target
        number of production deployments and the vision of "releasing faster and
        breaking less" is easily achievable. This approach helps the
        organization adjust in response to fluctuating business demand without
        interrupting core activities.
      </p>
      <Image
        src="/microservice.png"
        alt="microservice"
        width={400}
        height={500}
        className="mb-4 rounded-lg mx-auto"
      />
      <div className="text-sm text-gray-500 text-center mb-2">
        Image credits: [microservices.io]
      </div>
      <h2 className="mb-2 text-xl font-semibold">Challenges:</h2>
      <p className="mb-6">
        Microservices are not something that will solve all the architectural
        problems in the application. Developing these systems is complex. More
        granularity means more moving parts. Refactoring a monolithic
        application to microservices creates many components that constantly
        communicate. The complexity is shifted to the interconnections between
        the services.
      </p>
      <p className="mb-6">
        The challenges of refactoring from monolith to microservices are as
        follows:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
        <li>When more services interact, possible failure points increase.</li>
        <li>
          Tracing performance problems across different tiers for a single
          transaction becomes difficult.
        </li>
        <li>
          Distributed logic and data increase the effort of finding the root
          cause of an issue.
        </li>
        <li>
          Operational complexity increases, and managing these services and
          monitoring them becomes a tough task.
        </li>
        <li>
          The ability to quickly release small services is good for development,
          but puts a lot of strain on operations as a few applications now turn
          into hundreds of microservices.
        </li>
        <li>
          Traditional logging is not effective because microservices are
          independent and distributed.
        </li>
      </ul>
      <h2 className="mb-2 text-xl font-semibold">Solution:</h2>
      <p className="mb-6">
        A typical process to migrate from monolith to microservices involves the
        following steps:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Identify logical components.</li>
        <li>Flatten and refactor components.</li>
        <li>Identify component dependencies.</li>
        <li>Identify component groups.</li>
        <li>Create an API for remote user interface.</li>
        <li>Migrate component groups to "macroservices."</li>
        <li>Migrate "macroservices" to microservices.</li>
      </ul>
      <h2 className="mb-2 text-xl font-semibold">
        Identify logical components.
      </h2>
      <p className="mb-6">
        There are three main information components with the data used:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Data objects</li>
        <li>Data actions</li>
        <li>Job to perform and use case</li>
      </ul>
      <p className="mb-6">
        The data objects, data actions, and job to perform for each system
        should be identified. All these components are implemented in the
        codebase as modules. The modules should be grouped into categories for
        working with later steps. System architects may find it easy to identify
        the data objects used in the system and working from this dataset, they
        can determine the data actions and map these to the jobs to be
        performed. The migration from a monolithic system to microservices does
        not affect the UI directly. The components that are best for migrating
        are thus determined by which:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Components are used by most users</li>
        <li>Components are used most frequently</li>
        <li>Components have the fewest dependencies</li>
        <li>Components are performing too slow</li>
      </ul>
      <h2 className="mb-2 text-xl font-semibold">
        Flatten and refactor components.
      </h2>
      <p className="mb-6">
        After all the modules have been grouped and uniquely identified, it is
        time to organize the groups internally. Components with redundant
        functionality must be addressed before implementing microservices. In
        the final system, there should be only one microservice that performs
        any specific task. Since one of the effects of migration is to have a
        single data repository for any piece of data, any data that is
        replicated in multiple locations must be examined. It is also possible
        that data may be obtained from multiple locations or it may be a
        combination from multiple data sources. So, it is essential that one
        final representation exists for each unique datatype.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Identify component dependencies.
      </h2>
      <p className="mb-6">
        After the components have been identified and organized to prepare for
        migration, the System Architect (SA) should identify the dependencies
        between the components. For this, static analysis of the source code can
        be performed. There are some dynamic analysis tools that can analyze
        usage patterns of an application. After the dependencies are identified,
        the SA should group the components into cohesive groups that can be
        transformed into microservices. The goal here is to identify a small set
        of objects and their constituent actions that should be logically
        separated in the final system.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Create an API for remote user interface
      </h2>
      <p className="mb-6">
        The UI must be usable both during migration and afterwards, so it is
        likely to change as components are reworked from monolithic to
        macroservices and microservices. The key output from this migration is
        the API that the user interface and application can use to manipulate
        the data. Everything is based on this API, and so it must be ensured
        that existing interactions will not change significantly. Instead, it
        should allow for the addition of new objects and actions as they are
        identified and made available. After this API layer is made, all new
        functionality should be added through this API and not through the
        legacy application. The design and implementation of the API is key to
        the success of the migration to microservices. Changes in the API should
        not be frequent and should be planned in advance to prevent deployment
        issues. The only changes to the API should be those that add new data
        objects and functions and that do not modify the format of the existing
        outputs or expected inputs. For microservices to work properly, all data
        access must be provided through the API to the microservices or, during
        the migration transition period, to the macroservices or legacy
        application.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Migrate component groups to macroservices
      </h2>
      <p className="mb-6">
        Macroservices have a more relaxed posture towards sharing data
        repositories and allow more complex interactions with data objects. It
        may therefore be useful to consider their use as an interim step towards
        migrating to full microservices. A monolith is typically built with
        logic that may cause problems when converting to microservices. The key
        goal is to move component groups into separate projects and make
        separate deployments. Each macroservice should be independently
        deployable from within the system's CI/CD pipeline.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Migrate macroservices to microservices
      </h2>
      <p className="mb-6">
        The process of pulling the components, data objects, and functions out
        of the monolith and into macroservices will provide insight into how
        these components can be further separated into microservices. The points
        to remember are that each microservice maintains its own datastore and
        performs only a small set of actions on the data objects within that
        datastore.
      </p>
    </div>
  );
};

export default MonolithicToMicroservicesBasedArchitecture;
