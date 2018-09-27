using Microsoft.EntityFrameworkCore.Migrations;

namespace WorkoutAPI.Migrations
{
    public partial class AddedUserIdToWorkout : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Workout",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Workout");
        }
    }
}
