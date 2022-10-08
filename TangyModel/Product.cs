using System.ComponentModel.DataAnnotations;

namespace TangyModel;
public class Product
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    public decimal Price { get; set; }
    public bool IsActive { get; set; }
    public List<ProductProp> Properties { get; set; }
}
