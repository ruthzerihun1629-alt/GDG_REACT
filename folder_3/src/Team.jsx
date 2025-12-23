function Team() {

  // Reusable MemberCard component inside the same file
  function MemberCard({ name, role, bio }) {
    return (
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Bio:</strong> {bio}</p>
        <hr />
      </div>
    );
  }

  return (
    <div>
      <h1>Our Team</h1>

      <MemberCard
        name="Alice Johnson"
        role="Frontend Developer"
        bio="Builds responsive user interfaces using React."
      />

      <MemberCard
        name="Michael Brown"
        role="Backend Developer"
        bio="Works with databases and server-side logic."
      />

      <MemberCard
        name="Sara Wilson"
        role="UI/UX Designer"
        bio="Designs user-friendly and clean interfaces."
      />

    </div>
  );
}

export default Team;