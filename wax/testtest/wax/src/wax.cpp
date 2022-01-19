#include <wax.hpp>
ACTION wax::hi( name nm ) {
   /* fill in action body */
   print_f("Name : %", nm.value);
   print_f("Name : %", name("test").value);
   print_f("Name : %", name("test") == nm);
   print_f("Name : %", name("test").value == nm.value);
}