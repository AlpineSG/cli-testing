// Testcontainers setup for Java / Spring Boot
//
// Add to build.gradle.kts (or pom.xml):
//
//   testImplementation("org.testcontainers:testcontainers:1.20.4")
//   testImplementation("org.testcontainers:junit-jupiter:1.20.4")
//   // Add module for your database:
//   testImplementation("org.testcontainers:postgresql:1.20.4")
//   // or: testImplementation("org.testcontainers:mysql:1.20.4")
//   // or: testImplementation("org.testcontainers:mongodb:1.20.4")
//
// Example integration test:
//
// @Testcontainers
// @SpringBootTest
// class UserRepositoryIntegrationTest {
//     @Container
//     static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");
//
//     @DynamicPropertySource
//     static void configureProperties(DynamicPropertyRegistry registry) {
//         registry.add("spring.datasource.url", postgres::getJdbcUrl);
//         registry.add("spring.datasource.username", postgres::getUsername);
//         registry.add("spring.datasource.password", postgres::getPassword);
//     }
//
//     @Autowired
//     private UserRepository userRepository;
//
//     @Test
//     void shouldSaveAndRetrieveUser() {
//         // test with real database
//     }
// }
