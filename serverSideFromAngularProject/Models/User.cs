namespace ServerSide.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public string? JobSearchField { get; set; }
        public int? CountSendCV { get; set; }
        public List<int>? SendCVList { get; set; }
    }
}