"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      <h1 className="text-3xl font-bold mb-6 text-center">
        {" "}
        Refactoring from Monolithic to Microservices based Architecture.
        (Challenges and Solution)
      </h1>
      <h2 className="mb-2 text-xl font-semibold"> Monolithic Architecture</h2>
      <p className="mb-6">
        A monolithic architerture based application is typically a system in
        which all the modules are packaged together as a single deployable unit
        of execution. A monolithic application typically has a layered design,
        with separate layers for UI, Business Logic and Database. For example, A
        client-side UI (desktop or Web-based), a server-side application and a
        data access. The server-side application receives requests, executes
        domain-logic, retrieves and updates data from the database, and responds
        back to the client. This server-side application is based on the
        monolithic architecture. Any changes to the system involves building and
        deploying a new version of the server-side application.
      </p>
      <p className="mb-6">
        Over the period the monolith grows larger as new changes and
        functionality is added as per the business requirements. Modularity
        within the application is based on the features of the language it is
        written in(packages, moduies, etc.). As more and more changes are done
        and new functionalities are added, it becomes more difficult to keep a
        good modular structure. Even a small change requires the entire monolith
        to be rebuilt and deployed. The target number of production deployments
        and the goal of releasing faster and breaking less" becomes difficuit to
        achieve A monolith application can begin to suffer from the following
        problems: • Individual parts of the system are tightly coupled, so they
        cannot be scaled independently. • It is hard to maintain the code,
        because of tight coupling and hidden dependencies. • Testing becomes
        harder, increasing the probability of introducing vulnerabilities. so,
        at this point it makes sense to migrate the application to a
        microservices architecture.
      </p>
      <Image
        src="/monolithic1.webp"
        alt="Monolith"
        width={400}
        height={500}
        className="mb-4 rounded-lg mx-auto"
      />
      <h2 className="mb-2 text-xl font-semibold">
        Microservices Architecture:
      </h2>
      <p className="mb-6">
        Unlike monoliths, microservices are loosely coupled units of execution.
        It promotes breaking down a big monolithic application into smaller and
        simpler services to-be built and deployed independently. Well, It's
        "micro", so it's simple to understand and the developers can focus on
        just that functionality that they want to release onto production. When
        it is ready, developers can just test and deploy that service. There is
        no need to bundle it with rest of the application, and no waiting for a
        release window. Over the time, development cycles become faster as
        features can be released quicker. Testing becomes more coherent and
        consistent.
      </p>
      <p className="mb-6">
        If the service is creating bottlenecks when demand spikes, scale out by
        developing a few more instances for just that microservice. If the
        service is causing exceptions and production issues, removing it
        completely will not affect the rest of the application. Thus, a single
        service that fails will not bring down the entire application, This is
        an architecture that embraces the agile and DevOps practices. The target
        number of production deployments and the vision of "Releasing faster and
        breaking less" is easily achievable. This approach helps the
        organization adjust in response to fluctuating business demand, without
        interupting core activities
      </p>
      <Image
        src="/microservice.png"
        alt="microservice"
        width={400}
        height={500}
        className="mb-4 rounded-lg mx-auto"
      />
      <h2 className="mb-2 text-xl font-semibold">Challenges:</h2>
      <p className="mb-6">
        Microservices is not something that will solve all the architectural
        problems in the application, Developing these systems is complex. More
        granularity means more moving parts. Refactoring a monolithic
        application to microservices creates many components that constantly
        communicate: The complexity is shifted around the interconnections
        between the services.
      </p>
      <p className="mb-6">
        The challenges of refactoring from monolith to microservices are as
        follows: • When more senvices interact, possible failure points
        increase, • Tracing performance problems across different tiers for a
        single transaction becomes difficult. • Distributed logic and data
        increases the effort of finding the root cause of the issue. •
        Operational complexity increases and managing these services and
        monitoring them becomes a tough task. • The ability to quick release
        small services is a good thing for development, but puts a lot of strain
        on operations as a few applications now tum into hundreds of
        microservices • Traditiona I logging is not effective because
        microsenvices are independent and distributed.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Solution:</h2>
      <p className="mb-6">
        A typical process to migrate from monolith to microservices involve
        following steps: • Identify iogical components, • Flatten and refactor
        components. • Identify component dependencies. • Identify component
        groups. • Create an API for remote user interface, • Migrate component
        groups to "macroservices" • Migrate "macrosenvices" to microservices.
      </p>

      <h2 className="mb-2 text-xl font-semibold">
        Identify logical components.
      </h2>
      <p className="mb-6">
        There are three main information components with the data used: • data
        objects. • data actions. • job to perform and use case. the data
        objects, data actions and job to perform for each system should be
        identified. Al these components are implemented in the codebase as
        modules. The modules should be grouped into categories for working with
        later steps. System architects may find it easy to identify the data
        objects used in the system and working from this dataset, they can
        determine the data actions and map these to the jobs to be performed.
        The migration from a monolithic system to microservices does not affect
        the U| directly. The components that are best for migrating are thus
        determined by which • components are used by most users. • components
        are used most frequently. • components have most fewest dependencies. •
        components are performing too slow.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Flatten and refactor components.
      </h2>
      <p className="mb-6">
        After all the modules have been grouped and uniquely identified, it is
        time to organize the groups internally. Components with redundant
        functionality must be addressed before implementing microservices. In
        the final system, there should be only one microservice that perform any
        specific task. Since one of the effects of migration is to have single
        data repo for any piece of data, any data that is replicated in multiple
        locations must be examined. It is also possible that data may be
        obtained from multiple locations or it may be the combination from
        multiple data source. So, it is essential that one final representation
        exists for each unique datatype.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Identify component dependencies.
      </h2>
      <p className="mb-6">
        After the components have been identified and organized to prepare for
        migration, the SA should identify the dependencies between the
        components. For this static analysis of the source code can be
        performed. there are som$ dynamic analysis tools that can analyze usage
        patterns of an application. Identify component groups After the
        dependencies are identified the SA should group the components into
        cohesive groups that can be transformed into microservices. The goal
        here is to identify a small set of objects and their constituent actions
        that should be logically separated in the final system.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Create an API for remote user interface
      </h2>
      <p className="mb-6">
        The UI must be usable both during migration and afterwards, so it is
        likely change as components are reworked from monolithic to
        macroservices and microservices. The key output from this migration is
        the API that the user interface and application can use to manipulate
        the data. Everything is based on this APl, and so it must be ensured
        that existing interactions will not change significantly. Instead, it
        should allow for the addition of new objects and actions as they are
        identified and made available. After this API layer is made, all new
        functionality should be added through this API and not through Legacy
        application. The design and implementation of API is key to success of
        the migration to microservices. Changes in the API should not be
        frequent and planned in advance to prevent deployment issues. The only
        changes to the API should be those that add new data objects and
        functions and that do not modify the format of the existing outputs or
        expected inputs. For microservices to work properly, all data access
        must be provided through API to the microservices or, during migration
        transition period, to the macroservices or legacy application.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Migrate component groups to macroservices
      </h2>
      <p className="mb-6">
        Macroservices have more relaxed posture towards sharing data repos and
        allow more complex interactions with data objects. It may therefore be
        useful to consider their use as an interim step towards migrating to ful
        microservices. A monolith is typically built with logic that may cause
        problems when converting to microservices. the key goal is to move
        components groups into separate projects and make separate deployments.
        Each macroservice should be independently deployable from within the
        systems CICD pipeline.
      </p>
      <h2 className="mb-2 text-xl font-semibold">
        Migrate macroservices to microservices
      </h2>
      <p className="mb-6">
        The process of pulling the components, data Objects, and functions out
        of the monolith and into macroservices will provide insight into how
        these components can be further separated into microservices. The points
        to remember are, each microservice maintains its own datastore and
        performs only a small set of actions on the data objects within that
        datastore.
      </p>
    </div>
  );
};

export default MonolithicToMicroservicesBasedArchitecture;
